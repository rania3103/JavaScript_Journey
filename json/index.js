const names = ["rania", "salma", "abir", "nancy"];
const json_str = JSON.stringify(names);
console.log(json_str);

fetch("person.json").then(
    response => response.json()
).then(value => console.log(value));
