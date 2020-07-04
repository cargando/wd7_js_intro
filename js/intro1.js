// однострочный комментарий

/*

это
многострочный


комментарий
*/

console.log(`Привет МИР!!!`); // однострочный комментарий

// Переменная - это "коробочка" в которую можно положить какие-то данные
// вы должны уведомить браузер/JS о том, что хотите использовать новую переменную "коробочку"
// для этого нужно использовать ключевое слово var - это специально зарезервированное слово
// с помощью которого происходит объявления новой переменной, другими словами мы уведомляем браузер о том,
// что нам необходима новая коробка-переменная, куда в дальнейшем мы будем складывать/хранить нужные нам данные/информацию

// название переменной может начинаться с любого символа латинского алфавита (верхний или нижний регистр) а так же со знаков $ и _  (доллар и подчеркивание)
// остальные симполы недопустимо использовать в качестве первого символа в названии ПЕРЕМЕННОЙ (коробки)
// После первого символа в названии переменной можно уже использовать и цифры (но не наоборот)


var user = 'Вася'; // создал коробку, в которую поместил текстовую информацию "Вася"

console.log("Значене переменной user", user, Number.MAX_SAFE_INTEGER);

// ТИПЫ ДАННЫХ - разный вид информации (аналогия это как состояние вещества: твердый, жидкий, газообразный и пр)
// только в отношении информации, т.е. информация тоже может быть разнородной, может быть строкой текста, может быть числом, может быть булевым и тд

// string - строка текста
var user1 = 'Вася 1'; // строка текста объявляется через пару кавычек (первая кавычка - это начала текста, вторая кавычка - окончание строки текста)
var user2 = "Вася 2"; // допустимы все 3 вида кавычек: одинарные, двойные
var user3 = `Вася 3`; // и тильда

// number - число
var userAge = 500;

// boolean - битовый или двоичный тип данных
// false / true => (нарусском) => ложь / правда
var userMarried = false;
var userGotChild = true;

// object - объект
// коробка в которой можно хранить множество других коробок
var user5 = {};

// null - нулевый тип данных
var dd = null; // null - это 1) метка, обозначающая "пустоту"; 2) это в тоже самое время
var ff = null; // название типа данных

// undefined - неопределенный

var tt1 = undefined; // undefined - это 1) метка, обозначающая что у переменной нет значения с момента ее создания;
var tt2 = undefined; // 2) это в тоже самое время название типа данных

var tt3;

console.log("Переменная user1 = ", user1, user2, user3);

console.log("Переменная userAge = ", userAge);

console.log("Переменная userMarried, userGotChild = ", userMarried, userGotChild);

console.log("Переменная user5 = ", user5);

console.log("Переменная dd, ff = ", dd, ff);

console.log("Переменная tt1, tt2, tt3 = ", tt1, tt2, tt3);

var tt4 = 'Марина';

console.log("Переменная tt4 = ", tt4);

// typeof - ключевое слово, оператор для определения типа данных переменной

console.log("Тип данных переменной user1 = ", typeof user1);
console.log("Тип данных переменной userAge = ", typeof userAge);
console.log("Тип данных переменной userMarried = ", typeof userMarried);
console.log("Тип данных переменной user5 = ", typeof user5);
console.log("Тип данных переменной dd (null) = ", typeof dd);
console.log("Тип данных переменной tt1 = ", typeof tt1);

var booleanVal = true;
var numberVal = 500;
// alert("Результат: ", typeof booleanVal);

console.log("Результат: " + typeof booleanVal);
console.log("Результат: " + numberVal); // если есть строка, тогда все пытается преобразовать в строку

var a = "10"; // -> преобразовал в число 10
var b = "5";  // -> преобразовал в число 5
var с = 2;

console.log("Результат деления ");
console.log(a / b);
console.log(a / с);

console.log(a + с); // тут приоритет операции над строковыми данными

console.log( с / "sdfs");


if ( "0" ) {
  console.log("IF >> проверил, результат TRUE");
} else {
  console.log("IF >> проверил, результат FALSE");
}


// преобразовании в тип boolean происходит следующее
// null -> false
// undefined -> false
// число 0 -> false
// '' - пустая строка -> false
// NaN -> FALSE
// все остальное интерпритируется как TRUE


console.log("Результат сложения строки и boolen = " + booleanVal);

var k = 10;
k = -k; // в этом месте минус является унарным опертором
var t = k - 5; // в этом месте минус является БИНАРНЫМ опертором

console.log("Результат k = ", t);

var str2 = "100";

console.log( +str2, typeof +str2) ; // плюс тоже может быть унарным оператором - в этом случае
// происходит преобразование строки
// к типу данных number

console.log("Результат преобразования true = ", +true)
console.log("Результат преобразования false = ", +false)
console.log("Результат преобразования пустой строки = ", +'');

var res = 4 + 5 - 3 * 3 / 2; // математические операторы

console.log("10 процент 1 = ", 10 % 1);
console.log("10 процент 2 = ", 10 % 2);
console.log("10 процент 3 = ", 10 % 3);
console.log("10 процент 5 = ", 10 % 5);
console.log("10 процент 8 = ", 10 % 8);

console.log("Возведение в степень 3 в степени 3 = ", 3 ** 3);

var y = 9;
var r = 15;

console.log("Инкремент 9", ++y); // аналогия y = y + 1

console.log("Декремент 15", --r); // аналогия r = r - 1

// console.log("Возведение в степень 3 в степени 3 = ", 3 ** 3);

var u = 10;
console.log("Инкремент 10", u++); // аналогия u = u + 1
console.log("Инкремент 10 (вторая фаза)", u);

var qq = 12;

qq = qq * 2; // = 24 // это оператор
qq *= 2; // = 24 		// эквиваленен этому оператору

qq /= 2;  // qq = qq / 2
qq += 200;  // qq = qq + 200
qq -= 15; // qq = qq - 15


var s1 = 10, s2 = 15, s5 = 'string 111';
/*
  var s1 = 10;
  var s2 = 15;
  var s5 = 'string 111';
*/


var userName1 = 'Маруська';
console.log("userName1 = ", userName1);
// ..... через 100500 строк кода
var userName1 = 'Анастасия'; // эквивалент как буд-то вы просто присваиваете новое значение для уже ранее созданной переменной
// userName1 = 'Анастасия'
console.log("userName1 = ", userName1);

var cc = "w";

// ОПЕРАТОРЫ СРАВНЕНИЯ

// == -> опарация сравнения двух переменных / объектов / строк и тд

console.log("Результат сравнения 2 == 2", 2 == 2 );
console.log("Результат сравнения 2 == 3", 2 == 3 );

// === -> операция сравнения двух переменных с учетом типа данных
console.log("Результат сравнения 2 === '2' ", 2 === '2' );

// console.log("Результат сравнения 0 == null ", 0 == undefined ); // уточнить

// как сравниваются строки: js сравнивает 2 строки последовательно посимвольно

console.log("Результат сравнения 'abc' == 'abc'", 'abc' == 'abc' );
console.log("Результат сравнения 'abc' == 'abd'", 'abc' == 'abd' );

// > -> сравнение БОЛЬШЕ
// < -> сравнение МЕНЬШЕ
// >= -> БОЛЬШЕ либо РАВНО
// <= -> МЕНЬШЕ либо РАВНО

// тоже самое с сравнение с учетом типа данных
// >== БОЛЬШЕ либо РАВНО с учетом типа данных
// <== МЕНЬШЕ либо РАВНО с учетом типа данных
// === -> РАВНО с учетом типа данных

console.log("Результат сравнения 'abc' >= 'abd'", 'abc' >= 'abd' );
console.log("Результат сравнения 'abc' <= 'abd'", 'abc' <= 'abd' );


console.log("Результат сравнения null == undefined", null == undefined );
console.log("Результат сравнения null === undefined", null === undefined );


if (5 < 10) {
  console.log("Результат сравнения 5 < 10 = TRUE");
} else {
  console.log("Результат сравнения 5 > 10 = FALSE");
}
// alert("Какое-то сообщения для юзера"); // вывести текстовое сообщение для пользователя

// var res1 = prompt("Yo!!! введите что-нибудь: "); // вывести текстовое сообщение для пользователя
// console.log("Юзер ввел в окошко Prompt следующее значение:", res1);

// var res2 = confirm("Yo!!! Хотите отформатировать диск С ???? "); // вывести текстовое сообщение для пользователя
//console.log("Юзер согласен/не согласен форматнуть диск:", res2);

// УСЛОВНЫЙ ОПЕРАТОР IF
// предназначен для сравнения чего-то с чем-то (например двух переменных)
// или выяснения является ли какая-то переменная истинной или ложью
// и на основе этого выполнить блок кода

if (5 < 10) // в круглых скобка вычисляется выражение - true или false
{ // далее исполняется этот блок кода если в if было TRUE
  console.log("Результат сравнения 5 < 10 = TRUE");
}
else // эта половина необязательна
{ // ЛИБО исполняется этот блок кода если в if было FALSE
  console.log("Результат сравнения 5 > 10 = FALSE");
}

if (5 < 10) // в круглых скобка вычисляется выражение - true или false
{ // далее исполняется этот блок кода если в if было TRUE
  console.log("Результат сравнения 5 < 10 = TRUE");
}

// вариации с комбинированием

if (5 < 10) // в круглых скобка вычисляется выражение - true или false
{ // далее исполняется этот блок кода если в if было TRUE
  console.log("Результат сравнения 5 < 10 = TRUE");
  console.log("Результат сравнения 5 < 10 = TRUE");
  console.log("Результат сравнения 5 < 10 = TRUE");
  console.log("Результат сравнения 5 < 10 = TRUE");
  console.log("Результат сравнения 5 < 10 = TRUE");

}
else if (1 > 0)// эта половина необязательна
{ // ЛИБО исполняется этот блок кода если в if было FALSE
  console.log("Результат сравнения 5 > 10 = FALSE");
} else {
  // ....
}

// тернарный оператор
// это аналогия конструкции IF....ELSE...
// три области: первая область до знака вопроса - там указывается условия для вычисления
// вторая область между знаком вопроса и двоеточием - соответствует IF вернул TRUE
// третья область после двоеточия - соответствует IF вернул FALSE, т.е. соответствет ELSE
var tort = 'Наполеон'
var resTort = (tort == 'Мильфой' ? 'нравится' : ' не нравится');

console.log("Я сегодня съем тортик, который мне ", tort == 'Мильфой' ? 'нравится' : ' не нравится')
console.log("Я сегодня съем тортик, который мне ", resTort)


var guest = 'Семеныч';
var guestEat = 'Угостить ';

switch (guest) {

  case 'Vasya': guestEat += 'Kotleta'; break;
  case 'Masha': guestEat += 'Napoleon';  break;
  case 'Dash': guestEat += 'Milfoi';  break;
  case 'Grisha': guestEat += 'Grechka'; break;
  default: guestEat += ' просто водой';

}

console.log("Switch Case -> ", guestEat)


// внутри Switch Case можно писать большое количество операций
var guest1 = 'Vasya';
var guestEat1 = 'Угостить ';

switch (guest1) {

  case 'Vasya':
    guestEat1 += 'Kotleta';
    guestEat1 += ' и потом еще залакировать шоколадкой';
    console.log('Пришел мой любимый гость');
    break;
  case 'Masha': guestEat1 += 'Napoleon';  break;
  case 'Dash': guestEat1 += 'Milfoi';  break;
  case 'Grisha': guestEat1 += 'Grechka'; break;
  default: guestEat1 += ' просто водой';

}

console.log("Switch Case -> ", guestEat1);


// ЛОГИЧЕСКИЕ ОПЕРАТОРЫ
// || => OR - логическая операция ИЛИ => если перейти в математику, то это СЛОЖЕНИЕ
// && => AND  - логическая операция И => если перейти в математику, то это УМНОЖЕНИЕ
// ! => NOT  - логическая операция НЕ (исключение)

var tq1 = 100;
var tq2 = 40;

var chekRes = 50;

// AND
if (chekRes > tq2 && chekRes > tq1 ) {
  console.log("Да, chekRes больше чем tq1 и tq2 ");
} else {
  console.log("НЕТ, chekRes одновременно НЕ больше чем tq1 и tq2 ");
}

// OR
if (chekRes > tq2 || chekRes > tq1 ) { // кол-во логических операция может быть многократно больше чем 2, указанные в этом примере
  // например if (chekRes > tq2 || chekRes > tq1 || chekRes > 300 && chekRes != 0  )
  console.log("Да, chekRes больше чем tq1 или больше чем tq2 ");
} else {
  console.log("НЕТ, chekRes одновременно НЕ больше чем tq1 и tq2 ");
}

// NOT
var f1 = 100;
var f2 = 101;

if (f1 == f2 ) {
  console.log("Да, f1 РАВНО f2 ");
} else {
  console.log("НЕТ, f1 НЕ РАВНО f2 ");
}

if (f1 != f2 ) {
  console.log("НЕТ, f1 НЕ РАВНО f2 ");
} else {
  console.log("Да, f1 РАВНО f2 ");
}

// МАССИВЫ
// чтобы объявить массив нужно использовать последовательность квадратных скобок

var ms1 = []; // мы создали переменную, в которой хранится пустой массив (нет вагончиков-элементов)
var ms2 = [1, 2, 600]; // создал массив, из трех элементов (вагончиков): элементы имеют тип число (number)

console.log("Массив ms = ", ms2); // это просто вывод в консоль массива ЦЕЛИКОМ

console.log("Длинная массив ms2 = ", ms2.length); // таким образом мы узнаем длинную массива

console.log("Элемент массива ms2 с индексом 2 (3й вагончик) = ", ms2[ 2 ] ); // таким образом мы узнаем длинную массива

var spisokGostei = ['Маша', 'Даша', 'Глага', 'Витя', 'Семеныч']; // массив строк

var ms3 = [400, 'Маша', true, null, "Проект", "Mras", 100500]; // массив разных элементов (разный тип данных)

var ms4 = ['Маша', 125, true, spisokGostei]; // массив разных элементов (разный тип данных)

console.log("Пример вложенного массива ", ms4);

console.log("ms3[0]", ms3[0]);
console.log("ms3[1]", ms3[1]);
console.log("ms3[2]", ms3[2]);
console.log("ms3[3]", ms3[3]);
console.log("ms3[4]", ms3[4]);
console.log("ms3[5]", ms3[5]);
console.log("ms3[6]", ms3[6]);

console.log("Тоже самое только через цикл WHILE");
// while ( /* вспомогательное действие - условие срабатывания тела цикла */ ) {
// ТЕЛО ЦИКЛА = набор действий, который нужно многократно повторить
// если внутри вспомогательного действия = TRUE, тогда выполняется тело цикла
// если внутри вспомогательного действия = FALSE, тогда НЕ выполняется тело цикла
// }

var cnt = 0; // вспомогательная переменная для обхода массива

// цикл WHILE - сначала проверить условия прекращения/выполнения цикла, а потом
// делай тело цикла
while ( cnt  < ms3.length ) { // ms3.length => 7

  console.log(
    "ms3[",
    cnt,
    "]",
    ms3[ cnt ] // ms3[ 0 ],  ms3[ 1 ],  ms3[ 2 ], и тд
  );

  cnt++;
  // ++cnt;
  // cnt = cnt + 1;
}
////

console.log("Значение счетчика после завершения цикла:", cnt);

var i = 0;

while ( i  < ms4.length ) { // ms3.length => 7

  var currentElement = ms4[ i ];

  if (Array.isArray( currentElement )) { // Array.isArray - узнает является ли элемент массива ms4[ i ] - вложенным подмассивом
    var j = 0;
    // while ( j  < ms4[ i ].length ) {

    while ( j  < currentElement.length ) {
      console.log("ms4[", i, "]","[", j, "]", ms4[ i ][ j ]);
      j++;
    }
  } else {
    console.log("ms4[", i, "]", ms4[ i ]);
  }


  i++;
}

// можно сделать цикл WHILE без вспомогательного действия
i = 0;
while (1) {
  if (i  < ms4.length ) {
    break; // принудительно прекратить исполнение тела цикла, начиная с этого места
  }
  if ( i == 1) {
    i++;
    continue; // переход на следующую итерацию цикла, т.е. наверх к while (......)
  }
  console.log("ms4[", i, "]", ms4[ i ]);
  i++;
}



// новый цикл DO .... WHILE = сначала делай тело цикла, потом проверяй условие прекращения
i = 0;
do {
  console.log("ms4[", i, "]", ms4[ i ]);
  i++;
} while (i  < ms4.length);


// ЦИКЛ FOR, в круглых скобках находятся три области
//for (
/* 1я - начальное условие или действия с инициализацией */
//	; // точка с запятой - разделитель областей внутри for
/* 2я - условие прекращения работы цикла */
//  ; // точка с запятой - разделитель областей внутри for
/* 3я - операции с инкрементом или операция в конце тела цикла */
// ) { ТЕЛО ЦИКЛА }

console.log("Тоже самое с помощью цикла FOR ");

for (var i = 0; i  < ms4.length; i++) {
  console.log("ms4[", i, "]", ms4[ i ]);
}

// любую область из круглых скобок можно вынести в другое место
var i = 0;
for ( ; i  < ms4.length;) {
  console.log("ms4[", i, "]", ms4[ i ]);
  i++;
}



// пример с домашним заданием
var meal = 'Курица жаренная';
var water = 'Просто вода';

var shit = 'что-то не съедобное';
var oil = 'нефть';

function printUser(localMeal, localWater, gender = "male") { // ждет на вход (съесть) еду и воду

  return 'User ест такой набор:' + localMeal + ", " + localWater + ", " + gender;
}

printUser(meal, water);
printUser(meal, oil);
printUser(shit, oil, "female");




///////// ОБЪЕКТЫ ////////////


var ob1 = {
  fio: "Иван Иваныч Иванов",
  age: 30,
  phone: {
    code: '495',
    number: '5551212',
  },
  printUserName() {
    console.log(this.fio);
    console.log("сравнение с window", this === window);
  }
};

var ob2 = ob1 // копирование по ссылке, т.е. мы копируем ссылку на адрес в памяти, по которому уже находятся реальные данные (Иваныч, 30)

// как по нормальному скопировать данные, чтобы они были полноценным дубликатом

var ob3 = /* второе действие */ JSON.parse(  /*  это первое действие */ JSON.stringify(ob1)    )
// первое действие - из объекты JS сделать просто строку текста, в формате JSON
// второе действие - из строки текста JSON сделать в памяти интерпритатора еще один объект

var ob4 = Object.assign({}, ob1); // создает дубликат данных первого уровня, данные второго уровня, если это объект - будут по ссылке.

ob4.phone.code = '999';

var ob5 = { ...ob1, phone: { ...ob1.phone } };

ob1.address = 'Г.Москва,ул.Партизанская 10'; // создать новое поле в объекте, в любой момент времени
ob1['email'] = 'my@mail.ru'; // создать новое поле в объекте

// если нужно удалить поле из объекта с потерей данных
delete ob1.phone;

var b = 10;
delete b;

var ms = [1,2,3,4,5]; // массив - это тоже тип данных объект (Object), у которого есть специальный механизм,
// позволяющий быстрее работать с упорядоченными целочисленными ключами (индекс массива - это ключ или поле/свойство объекта)
delete ms[2];
console.log("ms", ms);

ms.length = 100;

var c = `Привет дорогой ${ ob1.fio ? 'это Иваныч' : 'нет имени' }${ob1.address}`;
console.log("c = ", c);



function printUserName() { // функция в JS - это тоже тип данных объект (Object)

  console.log("printUserName this:", this === window); // проверяем что при исполнении этой функции
  // ключевое слово this внутри нее на момент исполнения будет равно глобальному объекту window (самая большая "матрешка")
}

printUserName(); // выполняем функцию, как бы от лица (в контексте) объекта window, т.е. как метод window.printUserName()

console.log("ob1.printUserName = "); // вывод в консоль тоже можно записать как часть объекта window -> window.console.log("ob1.printUserName = ")
ob1.printUserName();

// setTimeout(window.ob1.printUserName, 500);

// ВАЖНО!
// ВСЕ переменные и функции, которые объявлены на первом уровне вложенности в объекте window
// можно использовать (или вызывать/исполнять) без префикса window.
// причем работать будут оба варианта: и с префиксом, и без


//////////////////////// ФУНКЦИЯ-КОНСТРУКТОР
// функцией-конструктором может быть любая функция, название которой начинается с большой буквы латинского алфавита
// функция-конструктор - это шаблон, на основе которого можно создать объект-экземпляр из функции-конструктора
// вспоминаем аналогию, что функция-конструктор - это техническая документация, на основе которой можно что-то сделать
// объект-экземпляр - это, условно "реальная вещь", которую создали по чертежам или технической документации (т.е. из функции-конструктора)

function SuperUser(localName, localAge, localPhone = 'no phone') {

  this.name = localName; // user6.name....
  this.age = localAge; // user6.age....
  this.phone = localPhone;

  this.prinUserInfo = function () {
    return this.name + ", " + this.age;
  }
  console.log("wind", window.name);
}

// создаем экземпляр-объекта на основе функции-конструктора SuperUser
// результат будет помещен в переменную user6
var user6 = new SuperUser('Семен Семеныч', 30, '555-12-12');
// аналогия { }.SuperUser('Семен Семеныч', 30, '555-12-12')
// результат будет условно таким user6 = { name:'...', age: '...', phone: '...' }


//////// ВАЖНО!!!
// механика создание объекта через оператор NEW:
// оператор NEW создает путой объект { } т.е. в этом объекте нет ни одного поля или метода
// вторым шагом оператор NEW берет функцию-конструктор (функция которая указана справа от оператора new)
// и меняет ей контекст исполнения, т.е. как бы прикрепляет функцию-конструктор к только что созданному объекту
// и далее выполняет эту функцию-конструктор
// если внутри функции-конструктора есть операции с ключевым словом this, тогда это значит что this указывает на
// тот самый объект, который только что создал NEW и от лица, которого выполняется функция-конструктор
// следовательно когда мы внутри функции-конструктора пишем this.name = '...' - это значит что внутри толко что созданного объекта
// появится поле "name" с каким-то значением, аналогия { name: "...." }

console.log(ob1);
console.log(user6, window.name);



//////////////////////// КЛАССЫ - это так называемый "синтаксический сахар", по факту (под капотом)
// это все теже функции конструкторы (шаблоны, т.е. "техническая документация") на основе которых
// создаются экземпляры объектов, как бы из техдокументации создается реальный самолетик на "заводе"
// а "завод" - это собственно и есть оператор NEW, который и устраивает весь процесс создания объекта
//  на основе того самого шаблона т.е. класса или функции конструктора
class SuperMegaMan {

  constructor(name, age, phone) {
    this.fio = name;
    this.age = age;
    this.phone = phone;
  }

  printUserInfo() {
    return this.fio + ", " + this.age;
  }
}

// создаем экземпляр-объекта на основе шаблона-класса SuperMegaMan
// результат будет помещен в переменную user7
var user7 = new SuperMegaMan("Петрович", 40, "444-1212");
// аналогия { }.SuperMegaMan("Петрович", 40, "444-1212")
// результат будет условно таким user7 = { fio:'...', age: '...', phone: '...' }

console.log(user7);


var ob10 = {
  cinema: 'Karo Films',
  movie: 'Matrix 10',

  printCinemaInfo() {
    console.log("Информация по кинотеатру: ", this.cinema, this.movie);
  }
}

var ob11 = {
  restoran: "Sushi wohk",
  dish: 'Kalifornia',

  printRestoranInfo(time, secondTime) {
    console.log("Информация по ресторану: ", this.restoran, this.dish, " at ", time, secondTime);
  }
}
console.log("Пример CALL:")
ob11.printRestoranInfo("10:00");
ob11.printRestoranInfo.call(ob10, "11:00", "18:00");
ob11.printRestoranInfo.apply(ob10, ["11:00", "17:00"]);

(ob11.printRestoranInfo.bind(ob10, "15:00", "16:00"))(); // немедленно исполняемая функция

// funtionCallMeLater();
// Косвенный вызов метода/функции через call, apply, bind

console.log("OB = ", {} == {}, {} === {});
if ({} == {}) {
  console.log("OB == true")
} else {
  console.log("OB == false")
}

function sst(firstName, secondNAme) {


  console.log("sst.name = ", sst.name, sst.extra);

  var result = {
    first: firstName,
    second: secondNAme,
    fullName: firstName + " " + secondNAme,

    printName: function () {
      return this.first;
    },

    printUser() {
      return this.first;
    }
  }

  return result;

  console.log("Hello")

}
sst.extra = 555;


/// Object.key.values.entries
// функции обертки над приметивами

var str2 = "Какой-то текст на русском языке";

console.log("Длинна строки", str2.length );
console.log("трансформированная строка", str2.toLocaleUpperCase() );

// String();
// String.toLocaleUpperCase();
// String.length;
//
//
// String(str2).length;
// String(str2).toLocaleUpperCase();

// Object() --> { }

var rrKeys = Object.keys(ob1);
var rrValues = Object.values(ob1);
var rrEntries = Object.entries(ob1);
console.log("Ключи объекта ob1", rrKeys, rrValues);
console.log("Entries объекта ob1", rrEntries);

console.log(String(ob1).toString());
var str3 = "   sdfsdfsdf       ";
console.log(str3.length, str3.trim().length );

var str4 = "Какой-то.текст,с,очень.интересными,буквами";

var resStr4 = str4.split(",");
console.log("Количество запятых = ", resStr4.length - 1);
console.log("Количество точек = ", str4.split(".").length - 1);

var strS = 'Марина съела утром __RPLC__ вкусных булочек.';

console.log(strS.replace("__RPLC__", "15"), str4.charAt(10));


//// Встроенные методы массивов

var SWEET_CONSTANT = "Сладкий";

var ms10 = [
  {
    name: "Банан",
    taste: SWEET_CONSTANT,
    size: "M",
  },
  {
    name: "Апельски",
    taste: "Кисло-Сладкий",
    size: "S",
  },
  {
    name: "Лемон",
    taste: "Кислый",
    size: "S",
  },
  {
    name: "Тыква",
    taste: "терпкая",
    size: "XL",
  },
  {
    name: "Виноград",
    taste: SWEET_CONSTANT,
    size: "xs",
  },
];

function printVegetables(item) {

  console.log(`Продукт: ${ item.name} имеет вкус '${ item.taste }', имеет размер '${ item.size }'`);
}

function printVegetablesUnkown(item) {
  if (typeof item === "object") {
    var resStr = [];
    Object
      .values(item)
      .forEach( function(localItem, index, originalMS) {
        resStr.push(localItem);
      });
    console.log("Продукт: ", resStr.join(" "));
  } else {
    console.log("Продукт (примитивный): ", item);
  }

}



ms10.forEach(printVegetables);
console.log("-- -------");
ms10.forEach(printVegetablesUnkown);


function printVegetablesMap(item) {
  return `Продукт: ${ item.name} имеет вкус '${ item.taste }', имеет размер '${ item.size }'`;
}

console.log("-- ------- MAP ");
var mapResult = ms10.map(printVegetablesMap)
console.log(mapResult);

var newMS = ["Василек", "Ромашка", "Пион"];
console.log("Резульат объединения двух массивов", ms10.concat(newMS))

function filterSweetVegs(item) {
  return item.taste && (item.taste.toLocaleLowerCase() === SWEET_CONSTANT.toLocaleLowerCase());

  // false || false || true || 5+6

}

var onlySweetVeg = ms10.filter(filterSweetVegs).map(printVegetablesMap);
console.log("Только сладкие объекты", onlySweetVeg);

ms11 = [55, 33, 44, 99];
console.log(ms11.includes(99)); // узнает есть такой элемент
console.log(ms11.indexOf(990)); // выдает индекс элемента, если есть


ms12 = [44, 2, 6, 89, 13, 67, 44, 23];

function sortMyArray(a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
}

function sortVerggy(a, b) {

  var a1 = a.name.toLocaleLowerCase()
  var b1 = b.name.toLocaleLowerCase()

  if (a1 < b1) return -1;
  else if (a1 > b1) return 1;
  else return 0;
}

// console.log(ms12.slice().sort())
// console.log(ms12.sort(sortMyArray))

console.log(ms10.sort(sortVerggy))

// var delResult = ms12.splice(5, 2); // удалить 2 элемента
// console.log("Удалили ", delResult, ", результат: ", ms12)

var addResult = ms12.splice(1, 2, "Золушку", "Тыква"); // хочу добавить 3 элемента
console.log("Добавили ", addResult, ", результат: ", ms12)

ms15 = [44, 2, 6, 89, 13, 67, 44, 23];

ms15.reduce(function(acc, item, index) {

  console.log("Шаг ", index, "Результат сложения: ", acc );
  return acc + item;
});

// Symbol

var mySymbol = Symbol();
console.log("Объект символ ", mySymbol );

var mySymbol1 = Symbol("Hello");
var mySymbol2 = Symbol("Hello");
console.log("Объект символ ", mySymbol1 === mySymbol2);

var user500 = {
  name: "sdfsdf",
  age: 40,
  [mySymbol1]: "Поле на основе символа"
}

console.log("Поле >> ", user500[mySymbol2]);


// гетеры и сетеры = getter & setter

var user12 = {
  fName: "",
  lName: "",
  age: 30,

  printUserName() {
    return this.fName + " " + this.lName;
  },

  checkUserEmail() {
    ;
  },

  get fullName() {
    return this.fName + " " + this.lName;
  },

  set fullName(val) {
    var res = val.split(" ");
    if (res[0]) {
      this.fName = res[0];
    }
    if (res[1]) {
      this.lName = res[1];
    }
  }

}

console.log("user12 через метод =", user12.printUserName() )

user12.fullName = "Иван Семеныч";

console.log("user12 через гетер =", user12.fullName )

Object.defineProperty(user12, "email", {
  value: 'asd@mail.ru',
  writable: false,
  enumerable: true,
  configurable: true,
});

console.log(Object.keys(user12));

function SuperUser(fname, lname) {
  this.fName = fname;
  this.lName = lname;

  this.printInfoForSetTimeout = function (testA, testB) {
    console.log("Тест для setTimeout: ", this.fName, this.lName)
    console.log("this для setTimeout: ", this === window);
    if (testA && testB) {
      console.log("printInfoForSetTimeout получил параметры: ", testA, testB);
    }
  }

}

var user13 = new SuperUser("Семен", "Семеныч");
var user14 = new SuperUser("Иван", "Иваны");

console.log("Объект", user13, user14);
console.log("Объект.__proto__", user13.__proto__)
console.log("Объект.__proto__.constructor", user13.__proto__.constructor);
// console.log("Функция конструктор", SuperUser);

var Clara = { name: "Clara"};
var Alex = { name: "Alex" };

Clara.__proto__ = Alex; // отличное от базового core Object

console.log("Объект", Clara, Clara.name)

// Object() // обладает встроенным свойством prototype
// String()
// Number()

console.log("Object.prototype = ", Object.prototype) // получаем ссылку на корневой объект core Object
console.log("Object.prototype = ", Object.prototype.__proto__) // пытаемся у core Object посмотреть родителя/предка = null
Object.prototype; // это просто свойство prototype, которое автоматом создается у всех функций в JS


function Country(name, capital, population, square) {
  this.name = name
  this.population = population
  this.square = square
  this.capital = capital
}

Country.prototype["printInfo"] = function () {
  return `Информация: ${ this.name }, ${this.capital}, ${this.population}, ${this.square}`;
  // return "Информация: " + this.name + " " + this.capital + " " + this.population + " " + this.square;
}



var Russia = new Country("Россия", "Москва", 145000000, 100500);
var France = new Country("France", "Paris", 80000000, 10500);
var Germany = new Country("Germany", "Berlin", 7000000, 9500);

console.log(Russia.printInfo());
console.log(France.printInfo());
console.log(Germany.printInfo());


console.log("Прототип Clara", Object.getPrototypeOf(Clara));
console.log("является ли  Alex родителем Clara", Alex.isPrototypeOf(Clara));

// есть строка текста, нужно взять и сделать функцию, которая дублирует искомую строку N раз,
// при этом функция должна быть встроенным методом для всех строк.

var str55 = "Какой-то интересный текст!";
var str80 = "Other text";


String.prototype.duplicate = function (val) {
  // var res = this; // в этом примере this указывает на контекст исполнения, т.е. на строку текста - переменную str55
  var res = "";

  while(val--) {
    res += this;
    // res = res + this;
  }
  return res;
}

console.log("str55.__proto__", str55.__proto__);
console.log("Результат", str55.duplicate(3));
console.log("Результат", str80.duplicate(2));

console.log("Результат", "Супер строка".duplicate(2));

// Какой-то интересный текст!Какой-то интересный текст!Какой-то интересный текст!

// дан массив, подсчитать кол-во положительных или отрицательных
Array.prototype.countSign = function (tp) {
  var cnt = 0;
  this.forEach(function (item) {
    if (tp === "-" && item < 0) {
      cnt ++;
    } else {
      cnt ++;
    }
  });

  return cnt;
}

// Array.prototype.countSign = function (ms, tp) {
// 	var cnt = 0;
//   ms.forEach(function (item) {
//     if (tp === "-" && item < 0) {
//       cnt ++;
// 		} else {
//       cnt ++;
// 		}
// 	});
//
//   return cnt;
// }

var ms10 = [-5, -6, -7, 4, -9, 0, 54, -3, 3];
console.log("Результат с массивом ", [-5, -6, -7, 4, -9, 0, 54, -3, 3, 8, -12, -15].countSign("-"));
console.log("Результат с массивом ", ms10.countSign("-"));


var h = "9"; // 0,1,2,3,4,5,6,7,8,9,A,B,Z
if (h >= "0" && h <= "9") {
  console.log("number", h)
} else {
  console.log("NOT number", h)
}

// A...Za...zА-Яа-я

// var h = "9"; // 0,1,2,3,4,5,6,7,8,9,A,B,Z
// if (str[i] >= "0" && str[i] <= "9") {
//   res += str[i]
// } else {
//   console.log("NOT number", h)
// }

// Отложенные операции или sleep
// setTimeout - планирование отложенного запуска функций

function printHello() {

  console.log("Привет через 1.5 секунды, после окончания скрипта");
}

// var timerID = setTimeout(printHello, 1500 /* через запятую параметры для передачи в printHello */);

console.log("Привет от последней строчки нашего скрипта!");

user14.printInfoForSetTimeout();

// window.fName = "Это Имя Семеныча в объекте WINDOW";
var fName = "Это Имя Семеныча в объекте WINDOW";

/// setTimeout(user14.printInfoForSetTimeout, 1500 /* через запятую параметры для передачи в printHello */);
var delayMlSeconds = 1600;
var timerID = setTimeout(user14.printInfoForSetTimeout, delayMlSeconds, "Маргаритка", "Марс");

console.log("ID отложенной операции", timerID);

clearTimeout(timerID);


function printHellowInterval(str) {
  console.log("print Hellow Interval:: hello", str);
}

// var intervalID = setInterval(printHellowInterval, delayMlSeconds, "Yo!!!");

// setTimeout(function (){ clearInterval(intervalID); }, delayMlSeconds * 10);

///// РЕКУРСИЯ //////

function recursionExample(val) {
  if (val >= 150) {
    return 0;
  }

  console.log("This is recursionExample:: ", val)

  recursionExample(val + 1);

}

// recursionExample(1);

var c = 10;


function calcFactorialRecurs(num) {
  // !5 => 1 * 2 * 3 * 4 * 5
  // !5 => 5 * 4 * 3 * 2 * 1
  if (num === 1) { // проверка окончания подсчета факториала
    return num;
  }

  if (num >= 10000) { // проверка окончания подсчета факториала
    console.log("calcFactorialRecurs:: не умею считать такие большие числа", num);
    return num;
  }

  return num * calcFactorialRecurs(num - 1);
}

console.log("Факториал Рекурсия 15", calcFactorialRecurs(15));

function calcFactorialLoop(num) {
  var res = 1;
  for(var i = 1; i <= num; i++) {
    res *= i;
  }

  return res;
}

console.log("Факториал Цикл 15", calcFactorialLoop(15));

var menu = [
  {
    title: "Подержка",
    url: '',
    children: [
      {
        title: "О компании",
        url: '',
      },
    ],
  },
  {
    title: "Акции",
    url: '',
  },
  {
    title: "Оплата",
    url: '',
  },
  {
    title: "Тарифы и услуги",
    url: '',
    children: [
      {
        title: "Тарифы",
        url: '',
        children: [
          {
            title: "Мобильная",
            url: '',
          },
          {
            title: "Объединяй",
            url: '',
          },
          {
            title: "Перейди в мегафон",
            url: '',
          },
        ],
      },
      {
        title: "Интернет",
        url: '',
        children: [
          {
            title: "Для смартфона",
            url: '',
          },
          {
            title: "Для дачи",
            url: '',
          },
          {
            title: "Для роуминга",
            url: '',
          },
        ],
      },
      {
        title: "Услуги/опции",
        url: '',
        children: [
          {
            title: "Безопасность",
            url: '',
          },
          {
            title: "Развлечение",
            url: '',
          },
          {
            title: "Полезное",
            url: '',
          },
        ],
      },
      {
        title: "Роуминг",
        url: '',
      },

    ],
  },
];

// if ( _условие_ ) {
//   // делаем 1
// } else {
//   // делаем 2
// }

// var a  = ( step >= 1 ) ?  1 /* делаем 1 */ : 2 /* делаем 2 */


// ms - массив с менюшкой
// step - это уровень погружения в рекурсию, или др словами этаж в стеке операций
function walkThroughMenu(ms, floor = 1) {
  var len = ms.length;

  // var space = floor >= 2 ? " ".repeat( floor * 2) : '';

  // 2й способ без тернарного оператора
  var space = ''; // floor >= 2 ? " ".repeat( floor * 2) : '';
  if (floor >= 2) {
    space = " ".repeat( floor * 2);
  }
  // конец 2го способа (без тернарного оператора)

  for(var i = 0; i < len; i++ ) {
    console.log(space + ms[ i ].title);

    if(ms[ i ].children && Array.isArray(ms[ i ].children)) {

      walkThroughMenu(ms[ i ].children, floor + 1)

    }
  }

}

walkThroughMenu(menu);
//
// var bb = "abc";
// bb.repeat(2); // => abcabc
// bb.repeat(3); // => abcabcabc
// bb.repeat(4); // => abcabcabcabc
//
// var cc = " ";
//
// cc.repeat(floor * 2); // => _
// cc.repeat(floor * 2); // => ____
// cc.repeat(floor * 2); // => ___
// cc.repeat(floor * 2); // => ____


/////// ДАТА И ВРЕМЯ

var today = new Date();
// today.toString = null;
console.log("Today: ", today) // это сегодня - здесь и сейчас

//
var today_and_24_houres = new Date("2020", "6", "1", "21", "50");
console.log("Today + 24h: ", today_and_24_houres) // это сегодня - здесь и сейчас

console.log("Year: ", today.getFullYear()) // год
console.log("Month: ", today.getMonth()) //  месяц
console.log("Date: ", today.getDate()) // дата месяца

console.log("Hours: ", today.getHours()) // часы
console.log("Minutes: ", today.getMinutes()) // минуты
console.log("Seconds: ", today.getSeconds()) // секунды

today.setFullYear("2050");
console.log("Today: ", today) //



/////// ЗАМЫКАНИЯ /////

console.log("cTest before = ", superTestFunc()); // HOISTING  = ВСПЛЫТИЕ

var cTest = 500;

console.log("cTest after = ", cTest);

function superTestFunc() {
  return 600;
}



console.log("a10", a10);
var a10 = 5; // window.a10 = 5;



var sofi = 'София';

function sayHello(val) { // 1: LexialEnvironment = { val: 'Семеныч', text: undefined }
  // [[SCOPE]]
  var text = "Приветствую тебя " + val; // 2: LexialEnvironment = { val: 'Семеныч', text: "Приветствую тебя Семеныч" }
  const test = 'some test'; // 3: LexialEnvironment = { val: 'Семеныч', text: "Приветствую тебя Семеныч", test: 'some test' }
  // 4: LexialEnvironment = { val: 'Семеныч', text: "Приветствую тебя Семеныч", test: 'some test'  }
  console.log("sayHello:: ", text);

  sayYo(text + test)

  function sayYo(value) { // 1: LexialEnvironment = { value: "Приветствую тебя Семеныч some test", someVal: undefined }
    var someVal = 'привет от внутренней функции';
    // 2: LexialEnvironment = { value: "Приветствую тебя Семеныч some test", someVal: 'привет от внутренней функции' }
    console.log("sayYo:: ", someVal, value, val, sofi);
  }
}

sayHello("Семеныч"); // window.sayHello(....)
// для window есть свой LexialEnvironment у которого так же есть свой [[SCOPE]] = null


// window.LexialEnvironment = { text: undefined }
sayHello5('>>>>> Вася');  // 1: sayHello.LexialEnvironment = { val: 'Вася'}

var text100 = 'Привет'; // 1: window.LexialEnvironment = { text: 'Привет'}

function sayHello5(name) {
  console.log( name + ", " + text100 );
}

function sum(a) { // sum.LexialEnvironment = { a: 5 }

  return function (b) { // temporary.LexialEnvironment = { b: 10 }
    return a + b;
  }

}
var temporary = sum(5);
console.log("SUM > temporary: ", temporary(10))

console.log("SUM > ", sum(7)(12)); // технически разницы нет между двумя строками выше и этой строкой
// и там и там выполняется подряд 2 функции
// просто в случае с temporary у вас образуется промежуточное "хранилище" для безымянной функции
// которая возвращается из функции sum


// summ(10, 12) // > 22
// sum(10)(12)

var globalName2 = 200;

var userName = 'Иваныч';
// window.lodash.size() // lodash.size()
// window._.size() // _.size()
// $
// _

var selfCounterObj = {
  cnt: 0,
  counter() {
    return ++this.cnt;
  }
}

console.log("вызвали selfCounterObj: ", selfCounterObj.counter());
console.log("вызвали selfCounterObj: ", selfCounterObj.counter());
console.log("вызвали selfCounterObj: ", selfCounterObj.counter());
console.log("вызвали selfCounterObj: ", selfCounterObj.counter());

function getCounter() {
  var cnt = 0;

  return function () {
    return ++cnt;
  }
}

var selfCounterVar = getCounter();
console.log("вызвали selfCounterVar: ", selfCounterVar());
console.log("вызвали selfCounterVar: ", selfCounterVar());
console.log("вызвали selfCounterVar: ", selfCounterVar());
console.log("вызвали selfCounterVar: ", selfCounterVar());


/// КАРИРОВАНИЕ
// sum(1)(2)(3)(4)(5).....(n);

function sumCurry(a) {
  var total = a;

  function fnHelper(b) {
    if (!b) {
      return total;
    }
    total += b;
    return fnHelper;
  }

  return fnHelper;

}

var result = sumCurry(1)(2)(3)(4)(5)(6)()

console.log("Сумма через каррирование: ", result);


function sumCurry2(a) {
  var total = a;

  function fnHelper(b) {
    total += b;
    return fnHelper;
  }

  fnHelper.toString = function () {
    return total;
  }

  return fnHelper;
}

console.log("Сумма через каррирование2: ", sumCurry2(1)(2)(3)(4)(5)(6));
