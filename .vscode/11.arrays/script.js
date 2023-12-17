let database=['Girafe','horse','fish','perroquet'];
//the first item in the arra always have the position 0, the last item equal the lenght of the array- 1, in the above example the position of the *perroquet* is 4-1 = 3 ,is 3
console.log(database);
console.log(database.length);
// to access the element that located in randomly nimber of index,we proceed by saving it in a variable 
let animal= database[0];
console.log(animal);
//to change the Element in the array
database[0]= 'cheetah';
console.log(database);
// let s access the last item of the array
let theLastAnimal= database[database.length-1];
console.log(theLastAnimal);
// to hide the last element of the array we use pop
database.pop();
console.log(database);

//to add a last element to array
database.push('cat');
console.log(database);

// iterating over arrays, there are different ways of doing it , in the lesson we gonna focus on 3 majors ways: while loop,for loop, forEach method
// the while loop method
let score=[19,29,39,49,59];
i=0;
while(i < score.length){
  score[i]++;
  i++;
}
console.log(score);
// the for loop method
for (j=0;j<score.length;j++) {
  score[j]++;
}
console.log(score);
// the forEach method, which is a little bit differnt to the other 2 previous methods since this one is a function which will have 2 parameters the element knonw as an entry and the position of the element known as an index in this typically method
score.forEach(function(entry,index){
  score[index]++;
});
console.log(score);
// to change the value of the entry ,it wont be an easy task as to just directly increase entry by incrementing bcs in js if you pass a number which is a primitive type in js ,is  a parameter it ll for sure be a copy of the original in this very case no matter how you are increasing the entry it ll remain 12, that means in a geek way that the primtive type is passed by value,so it means that the actual value of the variable is passed to a function, not the reference to the variable.so to handle this instead of incrementing a primitive data types which are : undefined, null, boolean, number, string, and symbol.,we ll increment the value of non primitive data tpes whch are arrays and objects we call it *passing by reference* When you pass an object to a function, you are passing a reference to the original object. If the function modifies the object, those changes affect the original object outside the function.
let catalogue= [
  {
    author:'december',
    duration:'2hrs',
    title:'js for beginners',
    copies:1
},
{
    author:'Serena',
    duration:'2hrs',
    title:'html for beginners',
    copies:1
},
{
    author:'Serena',
    duration:'2hrs',
    title:'css for beginners',
    copies:1
}];
// let's dwelve in an example which will show us ,the use of an entry as changeable yes you find it ,the elements of the variable must be an array or an object ,so that we can passing by reference bcs the element we are addressing in sot a primitiv elt

catalogue.forEach(function(entry) {
  if (entry.author == 'december') {
    entry.copies++;
  }
});
console.log(catalogue);
// multi dimensional arrays
let a=[[1,2,3],[4,5,6,7]];
console.log (a);
console.log(a[0][1]);
console.log(a[1][2]);
a[1][2]=26;
console.log(a);
//the multidimensional array in a terrain example
let terrains=[
  ['desert','desert','grass','grass'],['desert','grass','water','grass'],['grass','grass','water','water'],['grass','grass','grass','grass']
];
console.log(terrains);