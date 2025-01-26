import data from './Recipe.json' with { type: 'json' };
(function () {
// JavaScript object

// converting to JSON
const obj = data;

const para = document.createElement("p");
for (let i = 0; i < obj.length; i++) {
    title = obj[i]["Title"]
    const element = document.getElementById("Food");
    element.appendChild(title);
  }
// accessing the data
})();
