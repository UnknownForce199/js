//Логическое преобразование

/*
let userAge = 58;//(даёт true)
0(number) Вернёт false
let userName = "58", либо " " - Вернёт true,
а "" вернёт false потому что строка пустая
*/

let userAge = 58;
console.log(userAge);
console.log(typeof userAge);

userAge = Boolean(userAge);

console.log(userAge);
console.log(typeof userAge);
