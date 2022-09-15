//Оператор присвоения

let a = 1 + 2;
let b = 2;

let result = 8 - (a = b + 3);
console.log("Результат в скобках: " + a);
console.log("Общий результат: " + result);

//Присвоение по цепочке
/*
let resultOne = resultTwo = resultThree = 1 + 2;
console.log(resultOne);
console.log(resultTwo);
console.log(resultThree); //Везде будет ответ 3
*/

//Более понятная запись
let resultOne = 1 + 2;

resultTwo = resultOne;
resultThree = resultOne;

console.log(resultOne);
console.log(resultTwo);
console.log(resultThree);

//Сокращенная запись вычислений с присвоением

let users = 5;
console.log(users);
users = users + 3; //Итого: 8 (5 + 3)
console.log(users);
users = users * 2; //Итого: 16 (8 * 2)
console.log(users);

//Можно записать так:

let users2 = 5;
console.log(users2);
users2 += 3;
console.log(users2);
users2 *= 2;
console.log(users2);


let users3 = 5;
console.log(users3);
users3 += 1 + 2; //В первую очередь выполнится сложение после =
console.log(users3);
