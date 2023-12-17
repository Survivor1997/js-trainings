let item = "door";
if(item == "engine"){
  console.log("engine");
}
// not equal statement
if (item != "engine"){
  console.log("not engine");
}
// comparison in js
let score = 40;
if(score >= 80){
  console.log("Congrats you pass");
}
else if (score <= 50){
  console.log("Meet the teacher in office hours");
}
else{
  console.log("Believe in you,you can do better");
}
// Booleans in JS
let beingGeek = item == "geek";
console.log(beingGeek);

// challenge
// check the balance
let itemPrice= 600;
let serenaBalance= 500;
if(itemPrice <= serenaBalance){
  console.log("your balance is =",serenaBalance-itemPrice);
}
else if( itemPrice >500){
  console.log('serena, keep on girl, you couldnt purchase this item but , tomorrow you will')
}

