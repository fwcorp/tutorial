console.log(/cat/.test("the cat says meow"));
console.log(/\d+-\d+/.test('12-34'));

function removeCc(str) {
    return str.replace(/([A-Z])/g, ' $1');
}

console.log(removeCc('camelCase'));

const str = 'Some cool sentence, yeah';
const w = str.split(/\s/g);

console.log(w);

const m2 = 'I just bought some new swag';
console.log(/swag/gi.test(m2));
m1 = m2.replace('swag', 'cool stuff');
console.log(m1);

const sentence = 'the lazy dog jumps over...';
const half = sentence.slice(0, sentence.length / 2);
console.log(half);

let sentence2 = 'how to do english';
sentence2 = sentence2.slice(0, 1).toUpperCase() + sentence2.slice(1);
console.log(sentence2);

const t = str.indexOf(/lazy/gi);
console.log('t ' + t);
const fw = sentence.search(/lazy/gi);
console.log(fw);

const phrase = 'Error!';
const re = (phrase + ' ').repeat(3) + '*explodes*';
console.log(re);

let str2 = 'centered title';
str2 = str2.padStart(str.length + str.length / 2);
str2 = str2.padEnd(str.length * 2);
console.log(str2);

sentence.startsWith('the');
sentence.endsWith('the');

console.log('a'.charCodeAt());

const str3 = 'aAbBcC';
console.log(str3.split('').sort().join(""));
