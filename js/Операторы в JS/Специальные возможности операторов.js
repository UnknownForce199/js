//Специальные возможности операторов

//Применение оператора сложения к строкам
let resultOne = "Nikiforov" + " " + "Vladislav" + " " + "Denisovich";
console.log(resultOne);

//Если в выражении есть строка, т.е. если хотя бы
//один операнд будет строкой, то конечный результат
//тоже будет строкой
let resultTwo = "Vladislav " + 58;
console.log(resultTwo);
console.log(typeof resultTwo);

//Порядок значения не имеет
let resultThree = 58 + " Vladislav";
console.log(resultThree);
console.log(typeof resultThree);

//Казусы
let resultFour = 2 + "2";
console.log(resultFour);

//Операции до сложения со строкой
//выполняются как обычно
let resultFive = 58 - 20 + " Vladislav";
console.log(resultFive);
