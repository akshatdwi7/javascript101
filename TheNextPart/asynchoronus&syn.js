// synchronous = cotinue the process wihtout break
// asynchronous functions/code= alllowsmultiople operations to be perfomed co-currnelty without
// waiting DOesn't block the eecution flow and allows the program
//to continue
//(I/O operations,network requestins,fetching data Handled with:
// Handled with callbaclks,promises,Async/Await)

function func1(callback) {
  // perfect example of asynchronous code
  setTimeout(() => {
    console.log("Task1");
    callback();
  }, 3000);
}

function fun2() {
  console.log(`other functions`);
  console.log(`other functions`);
  console.log(`other functions`);
  console.log(`other functions`);
}

func1(fun2);
