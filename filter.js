// .filter() method creates a new array by filtering out the elements 

const ages = [ 12,43,78,18,9,21]

license=(element)=>{
return element >=18;
}
const arpproved = ages.filter(license);
console.log(arpproved); 
