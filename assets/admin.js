// Рабочая панель Nomad Consulting (Supabase)
(function () {
"use strict";

const T = {
ru:{panel:"Рабочая панель",loginTitle:"Вход для сотрудников",loginSub:"Используйте почту и пароль, которые выдал администратор.",email:"Почта",password:"Пароль",signIn:"Войти",signOut:"Выйти",badLogin:"Неверная почта или пароль.",
overview:"Обзор",applications:"Заявки с сайта",students:"Студенты",universities:"Университеты",notes:"Заметки",heroTitle:"От заявки до визы",heroSub:"Каждый студент и каждый документ под контролем.",addStudent:"Добавить студента",total:"Всего студентов",awaitingDocs:"Ждут документы",acceptedN:"Приняты",inVisa:"Оформляют визу",admissionList:"Список поступающих",viewAll:"Все",newApps:"Новые заявки с сайта",noNewApps:"Новых заявок нет",nextContacts:"Ближайшие контакты",noContacts:"Запланированных контактов нет",appsSub:"Заявки из формы на главной странице. Создайте из заявки студента или отметьте её обработанной.",noApps:"Заявок пока нет",appsNew:"Новые",appsDone:"Обработанные",toStudent:"Создать студента",markDone:"Обработана",markNew:"Вернуть в новые",
exportCsv:"Выгрузить в Excel (CSV)",search:"Поиск по имени или телефону",fName:"ФИО",fProgram:"Программа",fUni:"Университет",fStatus:"Статус",documents:"Документы",fNext:"Контакт",uniSub:"Вузы-партнёры, сроки подачи и контакты.",addUni:"Добавить университет",uniEmpty:"Университетов пока нет.",notesSub:"Общие заметки команды: договорённости, напоминания, контакты.",notePh:"Например: до 15 декабря получить у NJCIT список документов на весенний набор",addNote:"Добавить заметку",notesEmpty:"Заметок пока нет.",
gStudent:"Студент",fPhone:"Телефон",fParent:"Телефон родителя",fBirth:"Дата рождения",fPassExp:"Паспорт действует до",gProgram:"Поступление",fIntake:"Набор",intakePh:"Сентябрь 2027",fMajor:"Специальность",fScholarship:"Стипендия",gNext:"Следующий шаг",fNextDate:"Дата контакта",fNextAction:"Что сделать",nextPh:"Позвонить родителям про медсправку",fNote:"Заметка",history:"История статусов",delete:"Удалить",cancel:"Отмена",save:"Сохранить",uName:"Название",uCity:"Город",uDeadline:"Дедлайн подачи",uPrograms:"Программы",uProgPh:"Языковой год, 1+4, 3+2",uContact:"Контакт в вузе",uContactPh:"Имя, WeChat, e-mail",
allStatuses:"Все статусы",allPrograms:"Все программы",allUnis:"Все университеты",noUni:"— не выбран —",newStudent:"Новый студент",newUni:"Новый университет",saved:"Сохранено",deleted:"Удалено",confirmDel:"Удалить навсегда?",yesDel:"Да, удалить",today:"Сегодня",overdue:"просрочено",studentsN:"студентов",deadline:"Дедлайн",nothingFound:"Никого не найдено. Измените фильтры или поиск.",emptyStudents:"Студентов пока нет. Нажмите «Добавить студента», чтобы завести первого.",loading:"Загрузка…",loadFail:"Не удалось загрузить данные. Проверьте интернет и обновите страницу.",saveFail:"Не удалось сохранить. Проверьте интернет и попробуйте ещё раз.",pin:"Закрепить",unpin:"Открепить",noAction:"Без описания",shown:"Показано",of:"из",consult:"Нужна консультация",fromApp:"Из заявки с сайта",
st:{new:"Новый",docs:"Сбор документов",submitted:"Подано",accepted:"Принят",visa:"Виза",done:"Выехал",dropped:"Отказ"},
pr:{lang:"Языковой год",p14:"1+4",p32:"3+2",bach:"Бакалавриат",master:"Магистратура"},
sc:{none:"Без стипендии",partial:"Частичная",full:"Полная (CSC и др.)"},
dc:{passport:"Загранпаспорт",photo:"Фото на белом фоне",diploma:"Аттестат / диплом",transcript:"Вкладыш с оценками",translation:"Перевод и нотариус",medical:"Медосмотр (Foreigner Physical Exam)",police:"Справка о несудимости",lang:"Сертификат HSK / IELTS",notice:"Admission Notice",jw:"Форма JW202"}},
ky:{panel:"Иш панели",loginTitle:"Кызматкерлер үчүн кирүү",loginSub:"Администратор берген почта жана сырсөздү колдонуңуз.",email:"Почта",password:"Сырсөз",signIn:"Кирүү",signOut:"Чыгуу",badLogin:"Почта же сырсөз туура эмес.",
overview:"Жалпы көрүнүш",applications:"Сайттан келген арыздар",students:"Студенттер",universities:"Университеттер",notes:"Эскертмелер",heroTitle:"Арыздан визага чейин",heroSub:"Ар бир студент жана ар бир документ көзөмөлдө.",addStudent:"Студент кошуу",total:"Бардык студенттер",awaitingDocs:"Документ күтүлүүдө",acceptedN:"Кабыл алынды",inVisa:"Виза процессинде",admissionList:"Тапшыруучулардын тизмеси",viewAll:"Баары",newApps:"Сайттан жаңы арыздар",noNewApps:"Жаңы арыздар жок",nextContacts:"Жакынкы байланыштар",noContacts:"Пландалган байланыш жок",appsSub:"Башкы беттеги формадан келген арыздар. Арыздан студент түзүңүз же иштетилди деп белгилеңиз.",noApps:"Арыздар азырынча жок",appsNew:"Жаңы",appsDone:"Иштетилген",toStudent:"Студент түзүү",markDone:"Иштетилди",markNew:"Жаңыга кайтаруу",
exportCsv:"Excel'ге жүктөө (CSV)",search:"Аты же телефону боюнча издөө",fName:"Аты-жөнү",fProgram:"Программа",fUni:"Университет",fStatus:"Статус",documents:"Документтер",fNext:"Байланыш",uniSub:"Өнөктөш ЖОЖдор, тапшыруу мөөнөттөрү жана байланыштар.",addUni:"Университет кошуу",uniEmpty:"Университеттер азырынча жок.",notesSub:"Команданын жалпы эскертмелери: макулдашуулар, эскертүүлөр, байланыштар.",notePh:"Мисалы: 15-декабрга чейин NJCITтен жазгы кабыл алуунун документтер тизмесин алуу",addNote:"Эскертме кошуу",notesEmpty:"Эскертмелер азырынча жок.",
gStudent:"Студент",fPhone:"Телефон",fParent:"Ата-эненин телефону",fBirth:"Туулган күнү",fPassExp:"Паспорттун мөөнөтү",gProgram:"Тапшыруу",fIntake:"Кабыл алуу мезгили",intakePh:"Сентябрь 2027",fMajor:"Адистик",fScholarship:"Стипендия",gNext:"Кийинки кадам",fNextDate:"Байланыш күнү",fNextAction:"Эмне кылуу керек",nextPh:"Ата-энесине медсправка боюнча чалуу",fNote:"Эскертме",history:"Статустардын тарыхы",delete:"Өчүрүү",cancel:"Жокко чыгаруу",save:"Сактоо",uName:"Аталышы",uCity:"Шаар",uDeadline:"Тапшыруу мөөнөтү",uPrograms:"Программалар",uProgPh:"Тил жылы, 1+4, 3+2",uContact:"ЖОЖдогу байланыш",uContactPh:"Аты, WeChat, e-mail",
allStatuses:"Бардык статустар",allPrograms:"Бардык программалар",allUnis:"Бардык университеттер",noUni:"— тандалган жок —",newStudent:"Жаңы студент",newUni:"Жаңы университет",saved:"Сакталды",deleted:"Өчүрүлдү",confirmDel:"Биротоло өчүрөсүзбү?",yesDel:"Ооба, өчүрүү",today:"Бүгүн",overdue:"мөөнөтү өттү",studentsN:"студент",deadline:"Мөөнөт",nothingFound:"Эч ким табылган жок. Чыпкаларды же издөөнү өзгөртүңүз.",emptyStudents:"Студенттер азырынча жок. Биринчисин кошуу үчүн «Студент кошуу» баскычын басыңыз.",loading:"Жүктөлүүдө…",loadFail:"Маалымат жүктөлгөн жок. Интернетти текшерип, баракты жаңыртыңыз.",saveFail:"Сакталган жок. Интернетти текшерип, кайра аракет кылыңыз.",pin:"Бекитүү",unpin:"Бошотуу",noAction:"Сүрөттөмөсү жок",shown:"Көрсөтүлдү",of:"/",consult:"Кеңеш керек",fromApp:"Сайттагы арыздан",
st:{new:"Жаңы",docs:"Документ чогултуу",submitted:"Тапшырылды",accepted:"Кабыл алынды",visa:"Виза",done:"Жөнөдү",dropped:"Баш тартуу"},
pr:{lang:"Тил жылы",p14:"1+4",p32:"3+2",bach:"Бакалавриат",master:"Магистратура"},
sc:{none:"Стипендиясыз",partial:"Жарым-жартылай",full:"Толук (CSC ж.б.)"},
dc:{passport:"Чет өлкө паспорту",photo:"Ак фондогу сүрөт",diploma:"Аттестат / диплом",transcript:"Баалар тиркемеси",translation:"Котормо жана нотариус",medical:"Медкөрүк (Foreigner Physical Exam)",police:"Соттолбогондугу тууралуу справка",lang:"HSK / IELTS сертификаты",notice:"Admission Notice",jw:"JW202 формасы"}}
};
const STATUSES=["new","docs","submitted","accepted","visa","done","dropped"];
const PROGRAMS=["lang","p14","p32","bach","master"];
const SCHOL=["none","partial","full"];
const DOCS=["passport","photo","diploma","transcript","translation","medical","police","lang","notice","jw"];

let lang="ru"; try{lang=localStorage.getItem("nc-lang")||"ru"}catch(e){}
const S={students:[],unis:[],notes:[],apps:[],loaded:false,fStatus:"",fProg:"",appView:"new",editId:null,editUni:null,draftStatus:"new",fromApp:null};
let docState={};
const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
const t=k=>(T[lang][k]!==undefined?T[lang][k]:T.ru[k]!==undefined?T.ru[k]:k);
const esc=s=>String(s==null?"":s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const todayISO=()=>{const d=new Date();d.setMinutes(d.getMinutes()-d.getTimezoneOffset());return d.toISOString().slice(0,10)};
const fmtDate=iso=>{if(!iso)return"";const p=String(iso).slice(0,10).split("-");return p[2]+"."+p[1]+"."+p[0].slice(2)};
const fmtDT=iso=>{if(!iso)return"";const d=new Date(iso);return fmtDate(iso)+" "+String(d.getHours()).padStart(2,"0")+":"+String(d.getMinutes()).padStart(2,"0")};
const docCount=s=>DOCS.filter(k=>s.docs&&s.docs[k]).length;
const uniName=id=>(S.unis.find(u=>u.id===id)||{}).name||"";
const nn=v=>v===""?null:v;
const progLabel=p=>t("pr")[p]||(p==="consult"?t("consult"):p||"");

function toast(msg){const el=$("#toast");el.textContent=msg;el.hidden=false;clearTimeout(toast._t);toast._t=setTimeout(()=>el.hidden=true,2400)}
function banner(msg){const b=$("#banner");b.hidden=!msg;b.textContent=msg||""}

/* ---------- Supabase ---------- */
const cfg=window.NOMAD_CONFIG||{};
if(!cfg.SUPABASE_URL||!cfg.SUPABASE_ANON_KEY||!window.supabase){$("#setup-screen").hidden=false;return}
const sb=window.supabase.createClient(cfg.SUPABASE_URL,cfg.SUPABASE_ANON_KEY);

async function loadAll(){
  const [st,un,no,ap]=await Promise.all([
    sb.from("students").select("*").order("updated_at",{ascending:false}),
    sb.from("universities").select("*").order("name"),
    sb.from("notes").select("*").order("created_at",{ascending:false}),
    sb.from("applications").select("*").order("created_at",{ascending:false}).limit(500)
  ]);
  if(st.error||un.error||no.error||ap.error){banner(t("loadFail"));S.loaded=true;render();return}
  banner("");
  S.students=st.data;S.unis=un.data;S.notes=no.data;S.apps=ap.data;S.loaded=true;
  fillSelects();render();
}
async function reload(table){
  const map={students:["students","updated_at",false],universities:["unis","name",true],notes:["notes","created_at",false],applications:["apps","created_at",false]};
  const m=map[table];const r=await sb.from(table).select("*").order(m[1],{ascending:m[2]});
  if(!r.error){S[m[0]]=r.data;if(table==="universities")fillSelects();render()}
}
function realtime(){
  try{
    sb.channel("nomad").on("postgres_changes",{event:"*",schema:"public"},p=>{reload(p.table)}).subscribe();
  }catch(e){}
}

/* ---------- auth ---------- */
async function startApp(session){
  $("#login-screen").hidden=true;$("#app").hidden=false;
  $("#who-email").textContent=session.user.email||"";
  route();applyLang();await loadAll();realtime();
}
$("#login-form").addEventListener("submit",async e=>{
  e.preventDefault();const btn=$("#l-btn");btn.disabled=true;$("#l-err").hidden=true;
  const r=await sb.auth.signInWithPassword({email:$("#l-email").value.trim(),password:$("#l-pass").value});
  btn.disabled=false;
  if(r.error){$("#l-err").textContent=t("badLogin");$("#l-err").hidden=false;return}
  startApp(r.data.session);
});
$("#logout").addEventListener("click",async()=>{await sb.auth.signOut();location.reload()});

/* ---------- i18n ---------- */
function applyLang(){
  document.documentElement.lang=lang==="ky"?"ky":"ru";
  $$("[data-t]").forEach(el=>el.textContent=t(el.dataset.t));
  $$("[data-tp]").forEach(el=>el.placeholder=t(el.dataset.tp));
  $$(".lang button").forEach(b=>b.setAttribute("aria-pressed",String(b.dataset.lang===lang)));
  fillSelects();render();
}
$$(".lang button").forEach(b=>b.addEventListener("click",()=>{lang=b.dataset.lang;try{localStorage.setItem("nc-lang",lang)}catch(e){}applyLang()}));
function opts(list,labelFn,first){return (first!=null?'<option value="">'+esc(first)+"</option>":"")+list.map(v=>'<option value="'+esc(v)+'">'+esc(labelFn(v))+"</option>").join("")}
function setOpts(sel,html,fallback){const el=$(sel);const v=el.value;el.innerHTML=html;el.value=v;if(el.value!==v)el.value=fallback||""}
function fillSelects(){
  setOpts("#f-status",opts(STATUSES,k=>t("st")[k],t("allStatuses")));
  setOpts("#f-prog",opts(PROGRAMS,k=>t("pr")[k],t("allPrograms")));
  setOpts("#f-uni",'<option value="">'+esc(t("allUnis"))+"</option>"+S.unis.map(u=>'<option value="'+esc(u.id)+'">'+esc(u.name)+"</option>").join(""));
  setOpts("#s-program",opts(PROGRAMS,k=>t("pr")[k]),"lang");
  setOpts("#s-schol",opts(SCHOL,k=>t("sc")[k]),"none");
  setOpts("#s-uni",'<option value="">'+esc(t("noUni"))+"</option>"+S.unis.map(u=>'<option value="'+esc(u.id)+'">'+esc(u.name)+"</option>").join(""));
  $("#s-docs").innerHTML=DOCS.map(k=>'<label><input type="checkbox" data-doc="'+k+'"'+(docState[k]?" checked":"")+"> "+esc(t("dc")[k])+"</label>").join("");
}
document.addEventListener("change",e=>{if(e.target.dataset&&e.target.dataset.doc)docState[e.target.dataset.doc]=e.target.checked});

/* ---------- routing ---------- */
const VIEWS=["overview","applications","students","universities","notes"];
function route(){
  const v=VIEWS.includes(location.hash.slice(1))?location.hash.slice(1):"overview";
  VIEWS.forEach(x=>$("#v-"+x).hidden=x!==v);
  $$("#tabs a").forEach(a=>{if(a.dataset.v===v)a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
}
addEventListener("hashchange",route);

/* ---------- render ---------- */
const statusPill=s=>'<span class="pill s-'+esc(s)+'">'+esc(t("st")[s]||s)+"</span>";
const progBar=s=>{const n=docCount(s);return '<span class="prog-bar"><span class="bar"><i style="width:'+(n/DOCS.length*100)+'%"></i></span>'+n+"/"+DOCS.length+"</span>"};
const dateCls=iso=>{const d=String(iso).slice(0,10),td=todayISO();return d<td?"over":d===td?"today":""};
const emptyMsg=()=>S.loaded?t("emptyStudents"):t("loading");

function appItem(a,compact){
  return '<li><div><span class="nm">'+esc(a.name)+'</span> <span class="sub">· '+esc(a.phone)+"</span></div>"+
    '<div class="sub">'+esc(progLabel(a.program))+" · "+fmtDT(a.created_at)+"</div>"+
    (a.message&&!compact?'<div class="msg">'+esc(a.message)+"</div>":"")+
    '<div class="acts">'+(a.processed?'<button class="btn xs" data-app-new="'+esc(a.id)+'">'+esc(t("markNew"))+"</button>":
      '<button class="btn primary xs" data-app-stu="'+esc(a.id)+'">'+esc(t("toStudent"))+'</button><button class="btn xs" data-app-done="'+esc(a.id)+'">'+esc(t("markDone"))+"</button>")+"</div></li>";
}

function render(){
  const all=S.students;
  $("#st-total").textContent=all.filter(s=>s.status!=="dropped").length;
  $("#st-docs").textContent=all.filter(s=>s.status==="new"||s.status==="docs").length;
  $("#st-acc").textContent=all.filter(s=>s.status==="accepted").length;
  $("#st-visa").textContent=all.filter(s=>s.status==="visa").length;
  $("#pipe").innerHTML=STATUSES.map(k=>'<button type="button" data-st="'+k+'" aria-pressed="'+(S.fStatus===k)+'"><small>'+esc(t("st")[k])+"</small><b>"+all.filter(s=>s.status===k).length+"</b></button>").join("");
  $("#prog-chips").innerHTML='<button type="button" class="chip" data-pr="" aria-pressed="'+!S.fProg+'">'+esc(t("allPrograms"))+"<i>"+all.length+"</i></button>"+PROGRAMS.map(k=>'<button type="button" class="chip" data-pr="'+k+'" aria-pressed="'+(S.fProg===k)+'">'+esc(t("pr")[k])+"<i>"+all.filter(s=>s.program===k).length+"</i></button>").join("");

  const ov=all.filter(s=>(!S.fStatus||s.status===S.fStatus)&&(!S.fProg||s.program===S.fProg));
  $("#ov-list").innerHTML=ov.slice(0,50).map(s=>'<li class="row" data-id="'+esc(s.id)+'" tabindex="0"><div><div class="nm">'+esc(s.name)+'</div><div class="sub">'+esc(t("pr")[s.program]||"")+(s.intake?" · "+esc(s.intake):"")+'</div></div><div class="uni-col sub">'+esc(uniName(s.university_id))+'</div><div class="meta">'+statusPill(s.status)+progBar(s)+"</div></li>").join("");
  const ovE=$("#ov-empty");ovE.hidden=ov.length>0;ovE.textContent=all.length?t("nothingFound"):emptyMsg();

  const newApps=S.apps.filter(a=>!a.processed);
  const badge=$("#app-badge");badge.hidden=!newApps.length;badge.textContent=newApps.length;
  $("#ov-apps").innerHTML=newApps.slice(0,4).map(a=>appItem(a,true)).join("");
  $("#ov-apps-empty").hidden=newApps.length>0;
  $("#app-chips").innerHTML='<button type="button" class="chip" data-appv="new" aria-pressed="'+(S.appView==="new")+'">'+esc(t("appsNew"))+"<i>"+newApps.length+'</i></button><button type="button" class="chip" data-appv="done" aria-pressed="'+(S.appView==="done")+'">'+esc(t("appsDone"))+"<i>"+(S.apps.length-newApps.length)+"</i></button>";
  const appList=S.apps.filter(a=>S.appView==="new"?!a.processed:a.processed);
  $("#apps-list").innerHTML=appList.map(a=>appItem(a,false)).join("");
  $("#apps-empty").hidden=appList.length>0;

  const nx=all.filter(s=>s.next_date&&s.status!=="done"&&s.status!=="dropped").sort((a,b)=>a.next_date.localeCompare(b.next_date)).slice(0,8);
  $("#next-list").innerHTML=nx.map(s=>{const c=dateCls(s.next_date);return '<li data-id="'+esc(s.id)+'" tabindex="0"><span class="date '+c+'">'+(c==="today"?esc(t("today")):fmtDate(s.next_date))+'</span><div><div class="nm">'+esc(s.name)+'</div><div class="sub">'+esc(s.next_action||t("noAction"))+(c==="over"?' · <span style="color:var(--seal)">'+esc(t("overdue"))+"</span>":"")+"</div></div></li>"}).join("");
  $("#next-empty").hidden=nx.length>0;
  renderTable();renderUnis();renderNotes();
}
function filtered(){
  const q=$("#q").value.trim().toLowerCase(),qd=q.replace(/\D/g,""),fs=$("#f-status").value,fp=$("#f-prog").value,fu=$("#f-uni").value;
  return S.students.filter(s=>(!fs||s.status===fs)&&(!fp||s.program===fp)&&(!fu||s.university_id===fu)&&(!q||(s.name||"").toLowerCase().includes(q)||(qd&&((s.phone||"").replace(/\D/g,"").includes(qd)||(s.parent_phone||"").replace(/\D/g,"").includes(qd))))).sort((a,b)=>(a.name||"").localeCompare(b.name||"","ru"));
}
function renderTable(){
  const rows=filtered();
  $("#stu-tbody").innerHTML=rows.map(s=>'<tr data-id="'+esc(s.id)+'" tabindex="0"><td><b>'+esc(s.name)+'</b><div class="sub">'+esc(s.phone||"")+"</div></td><td>"+esc(t("pr")[s.program]||"")+"</td><td>"+esc(uniName(s.university_id))+"</td><td>"+statusPill(s.status)+"</td><td>"+progBar(s)+'</td><td class="num">'+(s.next_date?'<span class="date '+dateCls(s.next_date)+'">'+fmtDate(s.next_date)+"</span>":"—")+"</td></tr>").join("");
  const e=$("#stu-empty");e.hidden=rows.length>0;e.textContent=S.students.length?t("nothingFound"):emptyMsg();
  $("#stu-count").textContent=t("shown")+" "+rows.length+" "+t("of")+" "+S.students.length;
}
function renderUnis(){
  $("#uni-grid").innerHTML=S.unis.map(u=>{const n=S.students.filter(s=>s.university_id===u.id).length;return '<button type="button" class="uni-card" data-uid="'+esc(u.id)+'"><h3>'+esc(u.name)+'</h3><span class="sub">'+esc(u.city||"")+"</span>"+(u.programs?'<span style="font-size:13px">'+esc(u.programs)+"</span>":"")+'<span class="foot"><span>'+n+" "+esc(t("studentsN"))+"</span>"+(u.deadline?'<span class="date '+dateCls(u.deadline)+'">'+esc(t("deadline"))+": "+fmtDate(u.deadline)+"</span>":"")+"</span></button>"}).join("");
  $("#uni-empty").hidden=S.unis.length>0||!S.loaded;
}
function renderNotes(){
  const ns=S.notes.slice().sort((a,b)=>(b.pinned?1:0)-(a.pinned?1:0)||String(b.created_at).localeCompare(String(a.created_at)));
  $("#notes-list").innerHTML=ns.map(n=>'<div class="note'+(n.pinned?" pin":"")+'"><div><p>'+esc(n.text)+"</p><small>"+fmtDate(n.created_at)+'</small></div><div><button class="icon-btn" data-pin="'+esc(n.id)+'">'+esc(n.pinned?t("unpin"):t("pin"))+'</button><button class="icon-btn" data-ndel="'+esc(n.id)+'" aria-label="'+esc(t("delete"))+'">✕</button></div></div>').join("");
  $("#notes-empty").hidden=ns.length>0||!S.loaded;
}

/* ---------- interactions ---------- */
document.addEventListener("click",e=>{
  const g=s=>e.target.closest(s);let el;
  if((el=g("[data-st]"))){S.fStatus=S.fStatus===el.dataset.st?"":el.dataset.st;render();return}
  if((el=g("[data-pr]"))){S.fProg=el.dataset.pr;render();return}
  if((el=g("[data-appv]"))){S.appView=el.dataset.appv;render();return}
  if((el=g("[data-app-stu]"))){openStudent(null,S.apps.find(a=>a.id===el.dataset.appStu));return}
  if((el=g("[data-app-done]"))){setApp(el.dataset.appDone,true);return}
  if((el=g("[data-app-new]"))){setApp(el.dataset.appNew,false);return}
  if((el=g("[data-id]"))){openStudent(el.dataset.id);return}
  if((el=g("[data-uid]"))){openUni(el.dataset.uid);return}
  if(g("[data-add-student]")){openStudent(null);return}
  if(g("[data-close]")){e.target.closest("dialog").close();return}
  if((el=g("[data-pin]"))){togglePin(el.dataset.pin);return}
  if((el=g("[data-ndel]"))){delNote(el.dataset.ndel);return}
});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.matches("[data-id]"))e.target.click()});
["#q","#f-status","#f-prog","#f-uni"].forEach(id=>$(id).addEventListener("input",renderTable));

async function setApp(id,processed){
  const r=await sb.from("applications").update({processed}).eq("id",id);
  if(r.error){toast(t("saveFail"));return}
  await reload("applications");toast(t("saved"));
}

/* student drawer */
function renderStepper(){
  const ci=STATUSES.indexOf(S.draftStatus);
  $("#stu-stepper").innerHTML=STATUSES.map((k,i)=>'<button type="button" data-step="'+k+'" class="'+(k===S.draftStatus?"cur":(k!=="dropped"&&S.draftStatus!=="dropped"&&i<ci)?"done":"")+'">'+esc(t("st")[k])+"</button>").join("");
}
$("#stu-stepper").addEventListener("click",e=>{const b=e.target.closest("[data-step]");if(b){S.draftStatus=b.dataset.step;renderStepper()}});
function delButton(zone,id){zone.innerHTML='<button type="button" class="btn danger sm" data-del="'+id+'">'+esc(t("delete"))+"</button>"}
function openStudent(id,app){
  const s=id?S.students.find(x=>x.id===id):null;if(id&&!s)return;
  S.editId=id;S.fromApp=app||null;S.draftStatus=s?s.status:"new";docState=Object.assign({},s&&s.docs);
  fillSelects();
  const v=(k,d)=>s&&s[k]!=null?s[k]:(d||"");
  $("#stu-title").textContent=s?s.name:app?t("fromApp"):t("newStudent");
  $("#s-name").value=app?app.name:v("name");$("#s-phone").value=app?app.phone:v("phone");$("#s-parent").value=v("parent_phone");
  $("#s-birth").value=v("birth_date");$("#s-passexp").value=v("passport_expiry");
  $("#s-program").value=app&&PROGRAMS.includes(app.program)?app.program:v("program","lang");$("#s-intake").value=v("intake");$("#s-uni").value=v("university_id");
  $("#s-major").value=v("major");$("#s-schol").value=v("scholarship","none");
  $("#s-nextdate").value=v("next_date");$("#s-nextaction").value=v("next_action");$("#s-note").value=app?(app.message||""):v("note");
  const h=(s&&s.history)||[];$("#hist-wrap").hidden=!h.length;
  $("#s-hist").innerHTML=h.slice().reverse().map(x=>"<li>"+fmtDate(x.at)+" — "+esc(t("st")[x.status]||x.status)+"</li>").join("");
  const z=$("#del-zone");if(s)delButton(z,"stu");else z.innerHTML="";
  renderStepper();$("#stu-dlg").showModal();if(!s)$("#s-name").focus();
}
$("#del-zone").addEventListener("click",async e=>{
  if(e.target.dataset.del==="stu"){$("#del-zone").innerHTML='<span class="confirm">'+esc(t("confirmDel"))+' <button type="button" class="btn danger xs" id="stu-del-yes">'+esc(t("yesDel"))+"</button></span>";return}
  if(e.target.id==="stu-del-yes"){const r=await sb.from("students").delete().eq("id",S.editId);if(r.error){toast(t("saveFail"));return}$("#stu-dlg").close();await reload("students");toast(t("deleted"))}
});
$("#stu-form").addEventListener("submit",async e=>{
  e.preventDefault();
  const now=new Date().toISOString();const prev=S.editId?S.students.find(x=>x.id===S.editId):null;
  const history=prev&&prev.history?prev.history.slice():[];
  if(!prev||prev.status!==S.draftStatus)history.push({status:S.draftStatus,at:now});
  const body={name:$("#s-name").value.trim(),phone:$("#s-phone").value.trim(),parent_phone:$("#s-parent").value.trim(),birth_date:nn($("#s-birth").value),passport_expiry:nn($("#s-passexp").value),program:$("#s-program").value,intake:$("#s-intake").value.trim(),university_id:nn($("#s-uni").value),major:$("#s-major").value.trim(),scholarship:$("#s-schol").value,status:S.draftStatus,docs:Object.fromEntries(DOCS.map(k=>[k,!!docState[k]])),next_date:nn($("#s-nextdate").value),next_action:$("#s-nextaction").value.trim(),note:$("#s-note").value.trim(),history:history.slice(-30),updated_at:now};
  if(!body.name)return;
  if(S.fromApp)body.application_id=S.fromApp.id;
  const btn=$("#stu-save");btn.disabled=true;
  const r=prev?await sb.from("students").update(body).eq("id",prev.id):await sb.from("students").insert(body);
  btn.disabled=false;
  if(r.error){toast(t("saveFail"));return}
  if(S.fromApp)await sb.from("applications").update({processed:true}).eq("id",S.fromApp.id);
  $("#stu-dlg").close();await Promise.all([reload("students"),S.fromApp?reload("applications"):null]);toast(t("saved"));
});

/* university drawer */
$("#add-uni").addEventListener("click",()=>openUni(null));
function openUni(id){
  const u=id?S.unis.find(x=>x.id===id):null;S.editUni=id;
  $("#uni-title").textContent=u?u.name:t("newUni");
  $("#u-name").value=u?u.name:"";$("#u-city").value=u&&u.city||"";$("#u-deadline").value=u&&u.deadline||"";$("#u-programs").value=u&&u.programs||"";$("#u-contact").value=u&&u.contact||"";$("#u-note").value=u&&u.note||"";
  const z=$("#udel-zone");if(u)delButton(z,"uni");else z.innerHTML="";
  $("#uni-dlg").showModal();if(!u)$("#u-name").focus();
}
$("#udel-zone").addEventListener("click",async e=>{
  if(e.target.dataset.del==="uni"){$("#udel-zone").innerHTML='<span class="confirm">'+esc(t("confirmDel"))+' <button type="button" class="btn danger xs" id="uni-del-yes">'+esc(t("yesDel"))+"</button></span>";return}
  if(e.target.id==="uni-del-yes"){const r=await sb.from("universities").delete().eq("id",S.editUni);if(r.error){toast(t("saveFail"));return}$("#uni-dlg").close();await Promise.all([reload("universities"),reload("students")]);toast(t("deleted"))}
});
$("#uni-form").addEventListener("submit",async e=>{
  e.preventDefault();
  const body={name:$("#u-name").value.trim(),city:$("#u-city").value.trim(),deadline:nn($("#u-deadline").value),programs:$("#u-programs").value.trim(),contact:$("#u-contact").value.trim(),note:$("#u-note").value.trim(),updated_at:new Date().toISOString()};
  if(!body.name)return;
  const r=S.editUni?await sb.from("universities").update(body).eq("id",S.editUni):await sb.from("universities").insert(body);
  if(r.error){toast(t("saveFail"));return}
  $("#uni-dlg").close();await reload("universities");toast(t("saved"));
});

/* notes */
$("#note-form").addEventListener("submit",async e=>{
  e.preventDefault();const txt=$("#note-text").value.trim();if(!txt)return;
  const r=await sb.from("notes").insert({text:txt});
  if(r.error){toast(t("saveFail"));return}
  $("#note-text").value="";await reload("notes");toast(t("saved"));
});
async function togglePin(id){const n=S.notes.find(x=>x.id===id);if(!n)return;const r=await sb.from("notes").update({pinned:!n.pinned}).eq("id",id);if(r.error){toast(t("saveFail"));return}reload("notes")}
async function delNote(id){const r=await sb.from("notes").delete().eq("id",id);if(r.error){toast(t("saveFail"));return}await reload("notes");toast(t("deleted"))}

/* CSV export (opens in Excel; ; separator, UTF-8 BOM) */
$("#export-csv").addEventListener("click",()=>{
  const rows=filtered();
  const head=[t("fName"),t("fPhone"),t("fParent"),t("fBirth"),t("fPassExp"),t("fProgram"),t("fIntake"),t("fUni"),t("fMajor"),t("fScholarship"),t("fStatus"),t("documents"),t("fNextDate"),t("fNextAction"),t("fNote")];
  const q=v=>'"'+String(v==null?"":v).replace(/"/g,'""')+'"';
  const lines=[head.map(q).join(";")].concat(rows.map(s=>[s.name,s.phone,s.parent_phone,s.birth_date,s.passport_expiry,t("pr")[s.program],s.intake,uniName(s.university_id),s.major,t("sc")[s.scholarship],t("st")[s.status],docCount(s)+"/"+DOCS.length,s.next_date,s.next_action,s.note].map(q).join(";")));
  const blob=new Blob(["﻿"+lines.join("\r\n")],{type:"text/csv;charset=utf-8"});
  const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="nomad-students-"+todayISO()+".csv";document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500);
});

/* ---------- boot ---------- */
(async function(){
  const r=await sb.auth.getSession();
  if(r.data&&r.data.session)startApp(r.data.session);
  else{$("#login-screen").hidden=false;applyLang()}
  sb.auth.onAuthStateChange((ev)=>{if(ev==="SIGNED_OUT")location.reload()});
})();
})();
