'use strict';

let money = prompt("Каков Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

let appData = {
    Budget: money,
    TimeData: time,
    Expenses: {},
    OptionalExpenses: {},
    income: [],
    savings: false
};
let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько это обойдется?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько это обойдется?", "");

appData.Expenses.a1 = a2;
appData.Expenses.a3 = a4;

alert(appData.Budget / 30);


