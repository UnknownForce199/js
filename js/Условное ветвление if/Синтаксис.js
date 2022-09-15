//Синтаксис
let message = "Привет, Vladislav!";

if (2 > 1) {
	//Код выполняется только если
	//Выражение в скобках вернёт true
	console.log(message);
}
//Или
let first = 5;
let second = 10;

if (first === second) //вернётся false
{
	console.log(message);
}

//Более сложное условие
if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1) {
	console.log(message);
}

//Преобразование типов
if ("") {
	console.log(message);
}

//Более короткая запись
//Код выполняется только если
//выражение в скобках вернёт true
if (2 > 1) console.log(message);

//Блоки ELSE и ELSE IF
let number = 5;

if (number < 1) {
	console.log(message);
} else {
	console.log(`Условие не выполнено :(`);
}

if (number > 50) {
	console.log(`5 больше 50`);
} else if (number > 30) {
	console.log(`5 больше 30`);
} else if (number > 10) {
	console.log(`5 больше 10`);
} else if (number > 1) {
	console.log(` 5 больше 1`);
} else {
	console.log(`Условия не выполнено :(`);
}

//Условный оператор "?"
let message1 = "Привет";
/*
let messageEnd;

if (5 > 1) {
	messageEnd = ", Олег!";
} else {
	messageEnd = ", Лиса";
}

message1 += messageEnd;
console.log(message1);
*/

let messageEnd = (5 < 1) ? ", Вася!" : ", Лиса!";

message1 += messageEnd;
console.log(message1);


let message2 = "Здоровье";
let messageEnd2

/*
if (5 > 50) {
	messageEnd2 = ", Вася!";
} else if (5 > 30) {
	messageEnd2 = ", Оля!";
} else if (5 > 10) {
	messageEnd2 = ", Миша!";
} else if ( 5 > 1) {
	messageEnd2 = ", Андрей!";
} else {
	messageEnd2 = ", Иннокентий!";
} 

message2 += messageEnd2;
console.log(message2);
*/

messageEnd2 = 5 > 10 ? ", Вася!" :
	5 > 30 ? ", Оля!" :
		5 > 10 ? ", Миша!" :
			5 > 1 ? ", Андрей!" : ", Иннокентий!"

message2 += messageEnd2;
console.log(message2);

//Не стоит использовать ? как полный заменитель if:
5 > 10 ? console.log("Привет, Олег!") :
	console.log("Привет, Оля!");

//Лучше так, ведь более читабельно:

if (5 > 10) {
	console.log("Привет, Вася!")
} else {
	console.log("Салам Алейкум!")
}
