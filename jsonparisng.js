// Json is Javascript object notation , It is data-interchange format used for exchange of 
// data between server and client side application. 
// JSON files {key: values}or [value1 , laue2, valu3 ]


// JSON.stringify()= convertes json objects into string
// JSON.parse()= converts string into json objects

// const names= `[ " Akshat", " ronaldo", " Football", " siuu"]`
// const names2= JSON.parse(names);
// console.log(names2);



    "name": "John",
    "age": 30,
    "city": "New York",
    "isDeveloper": true,
    "hobbies": ["reading", "swimming", "coding"]
}
const people =[{
    "name": "John",
    "age": 30,
    "city": "New York",
    "isDeveloper": true
},{
    "name": "brocode",
    "age": 21,
    "city": "lakeworrd",
    "isDeveloper": false
},{

    "name": "BOB",
    "age": 20,
    "city": "san francisco",
    "isDeveloper": true
}]
const json= JSON.stringify(people);
//console.log(json);
const newparse= JSON.parse(json);
console.log(newparse); */