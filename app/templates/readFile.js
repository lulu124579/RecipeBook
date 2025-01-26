import data from './Recipe.json' with { type: 'json' };
// JavaScript object

// converting to JSON
const obj = data;

//const para = document.createElement("p");
for (let i = 0; i < 31; i++) {
    
    console.log(obj[i]["Title"])
   
  }
// accessing the data

