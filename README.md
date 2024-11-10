# Платформа для поиска фильмов
<img src="https://github.com/l1agosta/cinema-guide-app/assets/143471369/b572e5c3-920b-44a9-8219-4a45008e6c93">

<img src="https://github.com/l1agosta/cinema-guide-app/assets/143471369/8b382361-084e-4d35-90f1-d6edad9d5e51" width="410px">
<img src="https://github.com/l1agosta/cinema-guide-app/assets/143471369/5a96aec8-d481-4d9c-b1bd-c5c62ea3d7a5" width="410px">

# Макет:

Основной:
https://www.figma.com/design/GtNGAcKrZJ8us5RRGJThdJ/Diplom?node-id=0-1&t=T2nc3qivwu09bbUY-0

API запросы в директории backend

# STACK:

1. React
2. Nest.js
3. TypeScript
4. Mobx
5. Axios
6. Postgres
7. After maybe Docker

# Запуск проекта

## Backend

> [!NOTE]
> Вам необходим Postgresql и Node.js, если по какой-то причине сервер не запускается, поменяйте конфигурационный файл .env и подставьте свои данные от локальной БД 

### Установка зависимостей

```
$ npm install
```

### Запуск сервера
```
$ npm run start:dev
```

## Frontend

### Установка зависимостей

```
$ npm install
```

### Запуск клиента

```
$ npm run start:dev
```

## Docker

### Билд имеджей
```
$ docker-compose build
```

### Запуск контейнеров
```
$ docker-compose up
```
