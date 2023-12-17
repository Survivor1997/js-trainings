// 1.select , there is many way to select in this case we are going to learn how to select by id, we start by creating a variable where our selected object will be store ,the word document which give yu access to the document object model  the DOM,then type getElementById,then the name of the id we want to modify between paranthheses and in strings
let sign= document.getElementById('sign');
console.log(sign);
//2. modify the text: first how should we access the text in the console : as normal we use the console.log(the name ofthe id.textContent which is  the property to give u the text in there )
console.log(sign.textContent);
//if we want to modify the text we ll just have to tape the name of the id.textContent property and = as a sign of assignment and then put the infos, the change that you want
sign.textContent='Welcome,travelers!';
// Modifying the html content: the mojo here is the property innerHTML
//sign.innerHTML='<p>im doing it</p>';
//if i want to add the code at the end of the existent code i just have to do this
//sign.innerHTML= sign.innerHTML + '<p>im doing it</p>';
// change the style: the css is beign accessed by the property style + the name of the exact property you are looking for,the value will be every acceptable value for that poperty in css

sign.style.color ='blue';