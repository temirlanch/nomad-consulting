// Главная страница: отправка заявки в базу Supabase
(function () {
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  var cfg = window.NOMAD_CONFIG || {};
  var client = null;
  if (cfg.SUPABASE_URL && cfg.SUPABASE_ANON_KEY && window.supabase) {
    client = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY, { auth: { persistSession: false } });
  }

  var form = document.getElementById("apply-form");
  var box = document.getElementById("a-msg-box");
  var btn = document.getElementById("a-submit");

  function show(kind, text) {
    box.className = "form-msg " + kind;
    box.textContent = text;
    box.hidden = false;
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    var name = document.getElementById("a-name").value.trim();
    var phone = document.getElementById("a-phone").value.trim();
    var program = document.getElementById("a-program").value;
    var message = document.getElementById("a-msg").value.trim();
    if (document.getElementById("a-web").value) return; // защита от ботов

    if (!name) { show("err", "Укажите имя."); document.getElementById("a-name").focus(); return; }
    if (phone.replace(/\D/g, "").length < 6) { show("err", "Укажите номер телефона, чтобы мы могли перезвонить."); document.getElementById("a-phone").focus(); return; }
    if (!client) { show("err", "Форма ещё не подключена к базе. Пока позвоните или напишите нам в WhatsApp."); return; }

    btn.disabled = true;
    btn.textContent = "Отправляем…";
    var res = await client.from("applications").insert({ name: name, phone: phone, program: program, message: message });
    btn.disabled = false;
    btn.textContent = "Отправить заявку";
    if (res.error) {
      show("err", "Не удалось отправить заявку. Проверьте интернет и попробуйте ещё раз или позвоните нам.");
      return;
    }
    form.reset();
    show("ok", "Спасибо! Заявка отправлена. Мы перезвоним в течение рабочего дня.");
  });
})();
