const characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];

for (const character of characters) {
    console.log(character);
}

const firstName = 'Harry';
const house = 'Gryffindor';

console.log(`Welcome, ${firstName} of ${house}!`);

const characterName = 'Hermione';

console.log(characterName.toLowerCase());

console.log(characterName.toUpperCase());

const spell = ' Expelliarmus ';

console.log(spell.trim());

const quote = 'I solemnly swear that I am up to no good';

console.log(quote.slice(10, 16));

const firstNames = 'Ron';
const lastNames = 'Weasley';

console.log(firstNames.concat(' ', lastNames));

const sentence = 'Draco is a good wizard';

console.log(sentence.replace('good', 'bad'));

const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];

const count = houses.push('Slytherin');
console.log(houses);

const spells = ['Alohomora', 'Lumos', 'Nox']

console.log(spells.unshift('Accio'));

console.log(spells.shift('Accio'));

console.log(spells);

const animals = professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];

console.log(professors.slice(1,3));

const students = ['Neville', 'Seamus', 'Dean', 'Parvati'];

students.splice(1,2);

console.log(students);

const phrase = ' Mischief Managed ';

const result = phrase.trim().toLowerCase().concat(' - Harry');

console.log(result);

const wizards = ['Harry', 'Hermione', 'Ron']

const names = wizards.push('Luna, Draco');

console.log(wizards);

const message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';

const extractedWord = message.slice(11, 19);

console.log(extractedWord.concat(' Castle'));

