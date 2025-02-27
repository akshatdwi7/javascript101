// Error = An object that is created to represent a problem that occus
// Occurs oftebn with user input or establishing the connection

/* 
    try{}= Encloses the code that might potentially cause an errror
    catch{}= Catch and handle any thrown Error from try{}
    fianlly{}= (optional) Always executes, Used mostly for clean up ex. close 
    files,close connections,release sources
*/

try {
  console.log("hey this is the error");
  // Network Error
  // Promise Rejections
  // Secutiry errors
} catch (error) {
  console.log(error);
} finally {
  //closes fiels
  //closes connection
  // release resources
  console.log("This always executes");
}
console.log("you have reached the end");

// another program in other error2.js
