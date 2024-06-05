платформа для поиска фильмов

макеты:

основной:
https://www.figma.com/design/GtNGAcKrZJ8us5RRGJThdJ/Diplom?node-id=0-1&t=T2nc3qivwu09bbUY-0

админ-панелька:
https://www.figma.com/design/vjXwycRPHynXW6vKsjmnTi/admin-menu-cinema-guide?m=dev&node-id=0-1&t=VtBYhgnXeIfCCxeK-1

API запросы в директории backend

* STACK:

1. Next.js ( SSR REACT )
2. Nest.js ( Backend Framework )
3. Frontend + Backend on TS
4. Redux Toolkit
5. Axios
6. Postgres
7. Docker (maybe)

* Запуск проекта
(пока что только через внедерение зависимостей, возможно позже заверну все в Docker-контейнеры, README.md будет обновляться)

* BACKEND dev build:

вам необходим Postgresql и Node.js, если по какой-то причине сервер не запускается, поменяйте конфигурационный файл .env и подставьте свои данные от локальной БД 

 ```bash
    cd ./backend
    npm install
    npm run start:dev
  ```

* FRONTEND dev build:


 ```bash
    cd ./backend
    npm install
    npm run dev
  ```
