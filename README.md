# test task for SearchInform

demo: https://main--fantastic-dusk-713962.netlify.app/   

Проект выполнен на `Vue3` и `TypeScript`. Для стилизации используется `TailwindCSS`.

## Генерация данных

Данные создаются динамически во время загрузки страницы с помощью библиотеки `fakerjs`. Как возможный вариант, данные можно вынести в json-файл, чтобы имитировать загрузку с бэкенда. Для оптимизации нагрузки во время открытия страницы можно было бы генерировать и добавлять данные частями, чтобы не "блокировать" основной поток.

## Рендеринг списка и cкроллинг

Для рендеринга 1e6 записей я ограничил количество выводимых пользователей на экран.
Скроллинг реализовал через IntersectionObserver.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
