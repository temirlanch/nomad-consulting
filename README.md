# Сайт Nomad Consulting

## Что внутри

| Файл | Что это |
|---|---|
| `index.html` | Главная страница для клиентов: программы, услуги, этапы, вузы, вопросы, форма заявки |
| `admin.html` | Рабочая панель для сотрудников, открывается по адресу `/admin` |
| `assets/style.css`, `assets/admin.css` | Оформление |
| `assets/site.js` | Отправка формы заявки |
| `assets/admin.js` | Работа панели: студенты, заявки, вузы, заметки |
| `assets/config.js` | **Сюда вписываются ключи Supabase** |
| `supabase.sql` | Создаёт таблицы базы, вставляется в Supabase один раз |
| `vercel.json` | Настройки Vercel (адрес `/admin` без `.html`) |

## Шаг 1. Выложить сайт (GitHub + Vercel)

1. github.com → «+» → **New repository** → имя `nomad-consulting` → **Create repository**.
2. **uploading an existing file** → перетащите ВСЕ файлы и папку `assets` из архива → **Commit changes**.
3. vercel.com → **Add New → Project** → выберите `nomad-consulting` → **Deploy**.
4. Через минуту сайт работает по адресу вида `nomad-consulting.vercel.app`.

Главная уже работает. Форма и панель заработают после шага 2.

## Шаг 2. Подключить базу (Supabase)

1. supabase.com → **New project**. Имя `nomad-consulting`, регион ближе к нам (например, Frankfurt или Singapore), придумайте и сохраните пароль базы.
2. Откройте `supabase.sql` в Блокноте. В строке `ВАША_ПОЧТА@gmail.com` поставьте свою почту.
3. Supabase → **SQL Editor** → **New query** → вставьте весь текст → **Run**. Должно появиться «Success».
4. **Authentication → Users → Add user → Create new user**: ваша почта (та же, что в шаге 2) и пароль. Поставьте галочку **Auto Confirm User**.
5. **Authentication → Sign In / Providers**: выключите **Allow new users to sign up**, чтобы посторонние не регистрировались сами.
6. **Project Settings → API**: скопируйте **Project URL** и ключ **anon public**.
7. Впишите их в `assets/config.js` (на GitHub: откройте файл → карандаш ✏️ → вставьте → **Commit changes**).
8. Через минуту откройте `ваш-адрес.vercel.app/admin` и войдите.

## Как добавить сотрудника

1. Supabase → **SQL Editor** → выполните: `insert into staff values ('почта.коллеги@gmail.com');`
2. **Authentication → Users → Add user** с этой же почтой и паролем → передайте пароль коллеге.

Чтобы убрать доступ: удалите пользователя в Authentication → Users.

## Как поменять текст на сайте

Тексты главной страницы лежат в `index.html`. Скобки вроде `[ТЕЛЕФОН]`, `[АДРЕС]` и `[ЦЕНА]` нужно заменить на реальные данные. На GitHub откройте файл, нажмите ✏️, исправьте и нажмите **Commit changes**. Vercel обновит сайт сам.

## Безопасность

- Ключ `anon` в `config.js` можно не скрывать: без входа он позволяет только отправить заявку.
- Данные студентов видят только вошедшие сотрудники, чья почта есть в таблице `staff`.
- Пароль базы и ключ `service_role` из Supabase никуда не вставляйте и никому не пересылайте.
