/*
const country = 'Romania';
const continent = "Europe";
let population = 17000000;

console.log(country);
console.log(continent);
console.log(population);


let isRomania = true;
const language = 'romanian';


console.log(typeof isRomania);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
//language = 'chinese';

const halfPopulation = population / 2;
population++;
console.log(population);

const finland = 6000000;
console.log(country > finland);

const maxCountry = 33000000;
console.log(country < maxCountry);
const description = country + " is in " + continent + ',and its ' + population + ' people speak ' + language;
console.log(description);
console.log(`${country} is in ${continent}, and it's ${population} people speak ${language}`);
console.log(`Ha!`);




if (population > 33000000) {
    console.log(`${country}'s population is above the average `);
} else {
    console.log(`${country}'s population is 17000000 milion below average`);
}


4;
617
23
console.log("123" < 57);//false


let number = 5 + 6 + '4' + 9 - 4 - 2;
console.log(typeof number);



// == VS ===
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1) {
    console.log('Only 1 border!');
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log('No borders');
}



const language = "arabic";
switch (language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers!");
        break;
    case "english":
        console.log('3rd place');
        break;
    case "hindi":
        console.log('Number 4')
            ;
        break;
    case "arabic":
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}



//The conditional operator

const population = 234000000;
population > 33000000 ? console.log("Portugal's population is above average") : console.log("Portugal's population is below average");

console.log(`Romania's population is ${population > 33000000 ? 'above' : 'below'} average`);





//exercise
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .20;
console.log(tip);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`); 

*/