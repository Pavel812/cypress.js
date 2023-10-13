describe('Тестируем покупку аватара в покемонах', function () {
it('Проверка с валидными данными', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // Находим поле логина и вводим правильный логин
        cy.get('#pass').type('iLoveqastudio1'); // Находим поле пароля и вводим правильный пароль
        cy.get('#loginButton').click(); // Нажимаем кнопку войти
        cy.contains('Авторизация прошла успешно').should('be.visible'); // Проверяем наличие нужного текста
   })

it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#forgotEmailButton').click(); // нажимаем забыл пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Находим окно ввода почты и вводим почту
        cy.get('#restoreEmailButton').click(); // Находим и нажимаем кнопку отправить код
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible'); // Проверяем нужное сообщение
})

it('Проверка с невалидными данными', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // вводим верный логин
        cy.get('#pass').type('yahooo'); // вводим не верный пароль
        cy.get('#loginButton').click(); // нажимаем кнопку войти
        cy.contains('Такого логина или пароля нет').should('be.visible'); // Проверяем наличие нужного текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем наличие крестика
})

it('Проверка с невалидными данными', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#mail').type('YAHOU@dolnikov.ru'); // вводим не верный логин
        cy.get('#pass').type('iLoveqastudio1'); // вводим верный пароль
        cy.get('#loginButton').click(); // нажимаем кнопку войти
        cy.contains('Такого логина или пароля нет').should('be.visible'); // Проверяем наличие нужного текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем наличие крестика
})

it('Проверка нарушения валидности почты', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#mail').type('YAHOUdolnikov.ru'); // Находим поле и вводим не валидную почту без @
        cy.get('#pass').type('iLoveqastudio1'); //  Находим поле и вводим верный пароль
        cy.get('#loginButton').click(); // Находим и нажимаем кнопку войти
        cy.contains('Нужно исправить проблему валидации').should('be.visible'); // 
})

it('Проверка авторизации с заглавными буквами в логане', function () {
        cy.visit('https://login.qa.studio/'); // заходим на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Находим поле логина и вводим логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1'); // Находим поле пароля и вводим правильный пароль
        cy.get('#loginButton').click(); // Нажимаем кнопку войти
        cy.contains('Авторизация прошла успешно').should('be.visible'); // Проверяем наличие нужного текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяем наличие крестика
   })

})