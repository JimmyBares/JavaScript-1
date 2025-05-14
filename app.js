/**
 * Turn each element in an array of dollars into cents
 * without using the map method
 * 
 * @examples
 * [1, 5, 10, 3] => [100, 500, 1000, 300]
 * [0, 10, 20] => [0, 1000, 2000]
 */

let dollars = [1, 5, 10, 3]

// Creat a new empty array
let cents = []

// loop over every element in 'dollars'

for (let i = 0; i < dollars.length; ++i) {
    console.log(dollars[i] * 100);
    cents.push(dollars[i] * 100);
}

console.log(cents)

