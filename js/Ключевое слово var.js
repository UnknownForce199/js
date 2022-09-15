//КЛЮЧЕВОЕ СЛОВО VAR

//Использование переменной до её объявления

"use strict" //Не важно используем мы строгий режим или нет

age = 23;
console.log(age);

var age;

//Области видимости
//В случае с функцией

function testBlocklet() {
	let myAgeLet = 23;
}
testBlocklet();

//Переменная НЕ видна за переделами блока
//console.log(myAgeLet);

function testBlockVar() {
	var myAgeVar = 23;
}
testBlockVar();

//Переменная НЕ видна за пределами блока
//console.log(myAgeVar);

//Но в случае с другим блоком (С условием)

if (true) {
	let sizeLet = 50
}
//Переменная НЕ видна за пределами блока
//console.log(sizeLet);

if (true) {
	var sizeVar = 50;
}
//Переменная ВИДНА за пределами блока
console.log(sizeVar);