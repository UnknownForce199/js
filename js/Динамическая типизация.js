//ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ
/*
JavaScript является динамически типизированным.
То есть тип данных переменной меняется динамически
в момент присвоения либо смены её значения.
А не в момент объявления.
*/

let userName; //объявляем переменную

console.log(typeof userName);

userName = 'Кайфуй пока молодой'; //Строка (String)

console.log(typeof userName);

userName = 58; //Число (Number)

console.log(typeof userName);