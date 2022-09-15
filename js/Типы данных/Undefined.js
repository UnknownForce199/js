// Undefiend - неопределённый тип

let userName; //Объявляем переменную
//Получаем тип данных
console.log(typeof userName);
//Получаем значение переменной
console.log(userName);

//Примеры использования
//Проверяем определена ли переменная

if (userName === undefined) {
	console.log('Переменная НЕ определена');
} else {
	console.log('Переменная определена');
}
//Либо с помощью оператора typeof

if (typeof userName === 'undefined') {
	console.log('Переменная НЕ определена');
} else {
	console.log('Переменная определена');
}