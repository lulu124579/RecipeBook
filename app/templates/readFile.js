import data from './Recipe.json' with { type: 'json' };
// JavaScript object
const jsonData = data;

// converting to JSON
const obj = JSON.stringify(jsonData);

// accessing the data
console.log(obj); // "{"name":"John","age":22}"
