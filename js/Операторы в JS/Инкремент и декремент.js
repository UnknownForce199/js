//Инкремент/декремент

//Инкремент ++
let addUser = 2;
addUser++;
console.log(addUser);

/*
Работает так же как и 
addUser = addUser +1;
или
addUser += 1;
*/

//Декремент
let removeUser = 2;
removeUser--;
console.log(removeUser);

/*
Инкремент / декремент можно применить только к переменной.
Попытка использовать его на значении, типа 5++, приведет к ошибке.
*/
//console.log(5++); //не работает как 5 + 1.

/*
Операторы ++ и -- могут быть расположены
не только после, но и до переменной
*/

//Постфиксная форма
/*
usersCounter++;
usersCounter--;
*/
//Префиксная форма
/*
++usersCounter;
--usersCounter;
*/

//Примеры:

//Постфиксная форма
let usersCounter = 0;
let newUsers = usersCounter++; //Получаем 0, потому что newUsers
//получает первоначальное значение, до выполнения оператора ++
console.log(newUsers);

//Префиксная форма
let usersCounter2 = 0;
let newUsers2 = ++usersCounter2; //Получаем 1, потому что newUsers2
//получает значение после выполнения оператора ++
console.log(newUsers2);

/*
Итого, если результат оператора не используется, а нужно только
увеличить / уменьшить переменную, тогда без разницы,
какую форму использовать
*/
let usersCounter3 = 0;
usersCounter3++; //Либо ++usersCounter3
console.log(usersCounter3); //Результат в обоих случаях будет 1

/*
Если хочется тут же использовать результат,
то нужна префиксная форма:
*/
let usersCounter4 = 0;
console.log(++usersCounter4);

/*
Если нужно увеличить/уменьшить и при этом
получить значение переменной
до увеличения/уменьшения - нужна постфиксная форма
*/
let usersCounter5 = 0;
console.log(usersCounter5++); //Будет 0
console.log(usersCounter5); //Будет 1

/*
инкремент / декремент можно
использовать в любых выражениях.
При этом их приоритет будет выше,
чем у большинства других арифметических операций:
*/

let usersCounter6 = 0;
let newUsers6 = 2 * ++usersCounter6;
console.log(newUsers6);

/*
Более читаемая запись:
let usersCounter6 = 0;
++usersCounter6;
let newUsers6 = 2 * usersCounter6;
console.log(newUsers6);
*/