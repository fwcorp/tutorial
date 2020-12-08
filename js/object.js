const jeff = {
    age: 25,
    name: 'Jeff',
    greet: function () {
        console.log('hello world', this.name);
    }
}

jeff.greet();

const ObjConstructor = function (x, y) {
    this.x = x
    this.y = y

    this.getCoord = () => {
        return [this.x, this.y]
    }
}

const one = new ObjConstructor(3, 2);
const two = ObjConstructor(7, 5);
console.log(one);
console.log(two);

one.getCoord();

// deep copy

const basic = {
    pos: {
        x: 250,
        y: 500
    }
}

const clone = JSON.parse(JSON.stringify(basic));
clone.pos.x = 5;
console.log(clone, basic);

// loop

const room = {
    x: 200,
    y: 200,
    children: {
        badGuy: {
            health: 500
        }
    }
}

for (let [key, val] of Object.defineProperties(room)) {
    console.log(key, val);
}