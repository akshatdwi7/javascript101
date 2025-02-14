let world = "  Its beautiful  "
world = world.repeat(900)
//console.log(world) // we can use charat to print the index  

// There are lot of sting methods we can use to find out the index of a character in a string
// .starts with
//. repleceall is very good to repleace all of the things with exisitng 

let phone = "123,456,7,890"
let newphone = phone.replaceAll(",", "lol")
console.log(newphone) 
// .pad Start() and .padEnd() are used to add spaces to the left and right of a string

/*
 String slicing - creating a substring from a portion of another string
 indexof is the method to find out the specific index of a character in a string
*/
let name = "Sarah Sharda "
let firstname = name.slice(0,name.indexOf(" "))
let lastname = name.slice(name.indexOf(" ") + 1)
console.log(firstname)
console.log(lastname)
// slice() method returns a subset of a string
