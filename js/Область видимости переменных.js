//ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННЫХ

//Видимость переменной только внутри блока инструкций
/*
function testBlock() {
	let myAge = 36;
	console.log(myAge);
}
testBlock()

console.log(myAge); */ //Переменная не видна за пределами блока

//Переменная внутри и за пределами блока
let myAge = 23;

function testBlock() {
let myAge = 18;
console.log(myAge); //Вывод переменной (Внутри блока будет 18)
}
testBlock();

console.log(myAge); //Вывод переменной (За пределами блока будет 23)

//В рамках одного блока переменную стоит использовать
//только после её объявления

//Ошибка, мы не можем использовать
//переменную перед объявлением
/*
console.log(myAge);
let myAge = 18;
*/

//Повторное объявление переменной
//в рамках одного блока запрещено
/*
let myAge = 23;
let myAge = 18; //Ошибка - переменная уже объявлена
*/

for (let i = 0; i < 3; i++) {
//Тут своя переменная i
console.log(i);

}
for (let i = 0; i < 3; i++) {
//И тут своя переменная i
console.log(i);
}