let numbers = [ 1,2,3,4,4,5,66,3,342]



double=(element, index, array)=>{
    array[index]= element*3
}

print=(double)=>{
    console.log(double)
}
numbers.forEach(double)
numbers.forEach(print); 

// forEach function iterated over the array and then impacts the single elements in that array 



/* 
crete 3 functions to make them uppercase and then second to make the first leter caps 
*/


let fruits = ["apple", "banana", "mango", "strwabeery", "netlfix"]



Caps=(element,index,array)=>{
    array[index]= element.toUpperCase();
    
}

First=(element,index, array)=>{
    array[index]= element.charAt(0).toUpperCase()+element.slice(1).toLowerCase()
}

display=(element)=>{
    console.log(element)
}
//fruits.forEach(Caps);
fruits.forEach(First);
fruits.forEach(display);
