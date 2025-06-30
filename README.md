## Запуск проекта

```
nvm use
npm install
npm run start
----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design
Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

Настроен линтер для ts/tsx файлов и scss файлов (запуск - npm run lint:ts:fix и npm run lint:scss:fix).
При коммите запускаются прекоммиит хуки с линтером.
----
## Тесты

В проекте используются e2e playwright тесты
Перед запуском тестов выполни npx playwright install
npm run test:e2e запуск всех тестов
npm run test:e2e:ui запуск тестов в интерфейсе

Необходимо так же добавить jest unit тесты компоненты и переиспользуемые хуки
----

