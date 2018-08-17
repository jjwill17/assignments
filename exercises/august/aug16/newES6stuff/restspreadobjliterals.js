// Object Literals

const title = form.title.value;
const name = form.name.value;

const newObject = { title, name }

console.log(colors)
const color = 'red';

const car = {
    color,
    drive() {
      return 'Vroom!';
    },
    getColor() {
      return this.color;
    }
};

// destructuring

var expense = {
    type: 'Business',
    amount: '$45 USD',
    value: '10',
    percent: '50%'
}

const {type, percent, value} = expense; 

const veggies = ['eggplant', 'cucumber', 'squash']

// es6 way
let [veggie1, veggie2, veg] = veggies

// es5 way
let veggie1 = veggies[0]
let veggie2 = veggies[1]
let veg = veggies[2]

console.log(veggie1)
console.log(veggie2)
console.log(veg)


// rest operator

function addNumbers (animal, ...numbers){
    console.log(animal)
    console.log(numbers)
}

addNumbers('animal',2,3,4,5)

// spread operator

var primaryColors = ['red', 'yellow', 'blue']
var otherColors = ['teal', 'magenta', 'brown']

primaryColors.concat(otherColors)

const colors = ['green', ...otherColors, 'orange', ...primaryColors, 'gibroni']
console.log(colors)

const shoppingList = (...items) => {
    if(items.indexOf('milk') === -1){
        return ['milk', ...items, 'cheese']
    }
    return items
}

console.log(shoppingList('bread', 'steak', 'eggs'))