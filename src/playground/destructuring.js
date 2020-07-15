// const person = {
//     name: 'Jimy',
//     age: 13,
//     location: {
//         city: 'Kolkata',
//         temp: 33
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age} years old.`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'The Monk who rode a Ferrari',
//     author: 'Gaur Gopal Das',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

const address = ['23 Crematorium Street', 'Kolkata', 'West Bengal', '700014'];
const [, , state] = address;

console.log(`You're in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [beverage, , mediumPrice] = item;
console.log(`A medium ${beverage} costs ${mediumPrice}`);