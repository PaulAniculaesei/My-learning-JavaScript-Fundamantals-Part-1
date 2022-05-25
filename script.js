/*
let js = "amazing";
console.log(40 + 8 + 15);
console.log('Jonas');
console.log(23);
let firstName = 'Sara-Amelia';
console.log(firstName);
console.log(firstName);
// leave it alone
console.log(firstName);



let _3years = 3;
*/

/* 
let javascriptIsFun = false;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof 23);

javascriptIsFun = "YES!";
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);


let age = 30;
age = 31;


const birthYear = 1991;
//birthYear = 1990;

//const job;

var job = "programmer";

tob = 'teacher';

lastName = 'Aniculaesei';
console.log(lastName);




const now = 2037;
const agePaul = now - 1991;
const ageSaraAmelia = now - 2018;
console.log(agePaul, ageSaraAmelia);


console.log(agePaul * 2, agePaul / 10, 2 ** 3);
//2**3 means 2 to the power of 3 = 2*2*2



const firstName = 'Paul';
const lastName = 'Aniculaesei';
console.log(firstName + ' ' + lastName);




//math operators
const now = 2037;
const agePaul = now - 1991;
const ageSaraAmelia = now - 2018;
console.log(agePaul, ageSaraAmelia);


//Assignment operators
console.log(agePaul * 2, agePaul / 10, 2 ** 3);

const firstName = "Paul";
const lastName = 'Aniculaesei'
console.log(firstName + ' ' + lastName);

let x = 10 + 5;//15
x += 10;
x *= 4;
x++;
x--;
x--;

console.log(x);


//Comparison operators

console.log(agePaul > ageSaraAmelia);
console.log(ageSaraAmelia >= 18);

const isFullAge = ageSaraAmelia >= 18

console.log(now - 1991 > now - 2018);



const now = 2037;
const agePaul = now - 1991;
const ageSaraAmelia = now - 2018;
console.log(agePaul, ageSaraAmelia);

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;//x = y = 10
console.log(x, y);


const averageAge = (agePaul + ageSaraAmelia) / 2;
console.log(agePaul, ageSaraAmelia, averageAge);


const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

let bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);

let bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

let markHigherBMI = (bmiMark > bmiJohn);
console.log(markHigherBMI);


const firstName = "Paul";
const job = "musician";
const birthYear = 1985;
const year = 2037;
const paul = "I'm " + firstName + ',a ' + (year - birthYear) + ' years old ' + job + " !";
console.log(paul);

const paulNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;

console.log(paulNew);

console.log(`Szia magyar fiu...!!!`);

console.log(`Szia
Hogy vagy?
Jol Vagy?`);




const age = 17;


if (age >= 18) {
    console.log(`You can take the license!🏎🏎`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Wait more time!You have only ${yearsLeft} years leaft!`);
}


const birthYear = 2022;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);



const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

let bmiMark = massMark / (heightMark * heightMark);
console.log(bmiMark);

let bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiJohn);

let markHigherBMI = (bmiMark > bmiJohn);
console.log(markHigherBMI);


if (bmiMark > bmiJohn) {
    console.log(`Marks's BMI (${bmiMark}) is higher than John's (${bmiJohn})`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})`);
}




const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);


console.log(Number("Jonas"));

console.log(typeof NaN);


console.log(String(23), 23);




console.log(`I am 23 years old`);

console.log("23" - "10 " + 3);

console.log("23" / 3);




//5 falsy values: 0, "",undefined,null,NaN
//They become falsy when you try to convert them to Boolean

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(13));
console.log(Boolean('Paul'));

const money = {};
if (money) {
    console.log("Don't spend itt all");
} else {
    console.log("Get a job!");
}



let height = NaN;
if (height) {
    console.log("Yeii!!");
} else {
    console.log('NOOO!!');
}



const age = 18;
if (age === 18) console.log('You just became an adult');




const favorite = Number(prompt('What is your favorite number?'));

console.log(typeof favorite);

if (favorite == 23) {
    console.log("COOL!")
};
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);



console.log(String(Number("13")));

console.log("1234345" - 10 - 23);


let n = '1' + 1;
n = n - 1;
console.log(n);

console.log(typeof NaN === "number");

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(1));
console.log(Boolean({}));


const money = null;
if (money) {
    console.log("You are rich!");
} else {
    console.log("Get some money");
}



//strict vs loose operator

const age = 18;

if (age === 18) console.log('You just became an adult (strict)');

if (age == 18) console.log('You just became an adult :D(loose)');


const favourite = Number(prompt("What's your favorite number?"));

console.log(typeof favourite);
if (favourite === 23) {
    console.log('Cool! 23 is an amazing number');
} else if (favourite === 7) {
    console.log('7 is a very cool number');
} else {
    console.log('Number is not 23 or 7!!');
}

if (favourite !== 23) {
    console.log("Why not 23?");
}


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean([]));

const money = 1;
if (money) {
    console.log(`Don't spend all of them`);
} else {
    console.log(`Go to work!`);
};



console.log(Boolean(""));
console.log(Boolean('Yes'));

console.log(Boolean(0.1));

console.log('22' - '10' - 10);



const age = 16;
if (age >= 20 && age <= 30) {
    return age;
}


const hasDriversLicense = true;
const hasGoodVision = true;



console.log(hasDriversLicense && hasGoodVision);

console.log(hasDriversLicense || hasGoodVision);

console.log(!hasDriversLicense);






const isTired = false;

console.log(hasDriversLicense || hasGoodVision || isTired);



if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Go and drive!...please');
} else {
    console.log('Drive a bicycle, not a car...');
}



const averageDolphins = (97 + 112 + 101) / 3;

const averageKoalas = (109 + 95 + 106) / 3;



if (averageDolphins > averageKoalas) {
    console.log("The Dolphins are the winners...!");
} else if (averageKoalas > averageDolphins) {
    console.log('The Koalas are the winners...!');
} else if (averageDolphins === averageKoalas) {
    console.log('No winners today...!!');
};





if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log("The Dolphins are the winners...!");
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log('The Koalas are the winners...!');
} else if (averageDolphins === averageKoalas) {
    console.log('No winners today...!!');
};


if (averageDolphins > averageKoalas && averageDolphins >= 100) {
    console.log("The Dolphins are the winners...!");
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
    console.log('The Koalas are the winners...!');
} else if (averageDolphins >= 100 && averageKoalas >= 100 && averageDolphins === averageKoalas) {
    console.log('Both win the tropfy!!');
} else {
    console.log(); "Nobody wins the trofy!!"
};



const day = "thursday";

switch (day) {
    case "monday":
        console.log("Plan learning javascript");
        console.log("Go to coding rom");
        break;
    case "tuesday":
        console.log("Prepare array videos");
        break;
    case "wednesday":
    case "thursday":
        console.log("Go to work");
        break;
    case "saturday":
        console.log("Go to church");
        break;
    case "sunday":
        console.log("Go to Nymphaea");
        break
    default:
        console.log("Not a valid day");

}
if (day === "wednesday" || day === "thursday") {
    console.log(day);
};



const age = 23;
age >= 18 ? console.log("I like to drink cola") : console.log('I want to drink fanta');


const drink = age >= 18 ? 'cola' : "water";
console.log(drink);


console.log(`I like to drink ${age >= 18 ? 'cola' : 'water'}`);


3 + 4;//expression
1985; //expression
true && false && ! false;//expresion


if (23 > 2) {
    const str = "23 is bigger";
};

console.log(`I am ${23} years old`);

*/