//КОНСТАНТЫ

//Объявление константы
const myAge = 23;
//let myAge = 18; //Нельзя изменить константу

//Имена констант в заранее известными значениями
const BLOCK_SIZE = 25;
const COLOR_RED = '#F00';

//Имя константы со значением присвоенным
//в процессе выполнения программы
const summSizes = 25 + 30;

//Смена значений в константе
//Объект с данными
const userProfile = {
	name: 'Vladislav',
	age: 23,
	message: 'Кайфуй, пока молодой'
}
console.log(userProfile);

//Далее я меняю значение одного из полей объекта
userProfile.age = 18;
//Ошибки нет, данные изменились
console.log(userProfile);

