// variable scope = where a varibale is reconginzed and accessible (local vs gloabal)
// we can declare same varibale name multiple times inside a fun but not outside  called local scope 

function f1(){

    let x = 90; 
    x++;
    console.log(x);
}
const f2 = ()=> {
    let x = 99;
    x++;
    console.log(x);
}

var bro = Number(f1()+ f2());
console.log(bro);
