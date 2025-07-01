//#1
let input = prompt("#1 Введіть ваше ім'я: ");
alert("Привіт, " + input + "!");
//#2
const birthYear = prompt("#2 Введіть ваш рік народження: ");
alert("Вам зараз " + (2025 - birthYear) + " років.");

//#3
let side = prompt("#3 Введіть довжину сторони квадрата: ");
alert("Периметр квадрата дорівнює " + (4 * side) + " одиниць.");
//#4
let radius = prompt("#4 Введіть радіус кола: ");
alert("Площа кола дорівнює " + (Math.PI * radius * radius).toFixed(2) + " квадратних одиниць.");

//#5
let distance = prompt("#5 Введіть відстань у кілометрах: ");
let time = prompt("#5 Введіть час у годинах: ");
alert("Швидкість дорівнює " + (distance / time) + " км/год.");

//#6    
const euroToUSD = 1.18; 
let dollars = prompt("#6 Введіть суму в доларах: ");
alert("Сума в євро дорівнює " + (dollars / euroToUSD).toFixed(2) + " €.");

//#7
const gigabyteToMegabyte = 1024;
const fileSize = 820;
let capacity = prompt("#7 Введіть обсяг пам'яті на флешці: ");
alert("На флешці можна зберегти " + Math.floor((capacity * gigabyteToMegabyte) / fileSize,-1) + " файлів по " + fileSize + " МБ.");


//#8
let amountOfMoney = prompt("#8 Введіть суму грошей: ");
let priceOfChocolate = prompt("#8 Введіть ціну шоколадки: ");
alert("Ви можете купити " + Math.floor(amountOfMoney / priceOfChocolate) + " шоколадок, і у вас залишиться " + (amountOfMoney % priceOfChocolate) + " грошей.");

//#9

let threeDigitNumber = prompt("#9 Введіть тризначне число: ");
alert("Паліндромом цього числа є: " + (threeDigitNumber % 10) + Math.trunc(threeDigitNumber / 10) % 10 + Math.trunc(threeDigitNumber / 100));


//#10   

let number = prompt("#10 Введіть число: ");
alert((number % 2 === 0) && "Це число парне." || "Це число непарне.");
