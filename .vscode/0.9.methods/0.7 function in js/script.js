//a funtion of transforming hours into minutes
function hourToMinutes(hours){
  let result = hours * 60;
  return result;
  console.log (result);
}
let a= hourToMinutes(40);
console.log(a);

let monthsToYear = function(year) {
return year * 12;
};
let b= monthsToYear(26);
console.log(b);
//variables  declaration 
let items = 40;
let balance = 200;
let itemPrice= 30;
// 1. check if we have enough stock
function sellItems(inquiries) {
if (items>=inquiries){
    //items= items-inquiries
    items-=inquiries
    //balance=balance + itemPrice*inquiries
    balance+= itemPrice * inquiries
    console.log('purchase completed',balance,items);
  }
  else if (items< inquiries){
    console.log ('mot enough stock');
  }
}
sellItems(10);