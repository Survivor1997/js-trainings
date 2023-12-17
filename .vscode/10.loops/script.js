//creation of a loop that 's like a function that helps us to redo the same thing a several times inn this lesson one type of loop wil be take into account it calls while loop
function sendSignal(){
  console.log('HEEEELP');
}
//declaration of a variable that helps us to track the the number of time the message was sent 
let i = 1; // this means that at each time the message will be sent it must been increase by 1,this means i=i+1 ,kinda like in brief i+= 1 or in a geek way we ll just increment which means i++
// well at that point you must think at a condition using of course arithmetiques operators that express the 1000 times that the message must be sent, and this will be *while* that typically means keep repeating until,The while statement in programming is used to create a loop that continues to execute a block of code as long as a specified condition is true, and since we've initialised the variable i to = 0,it  ll execute the code until it becomes false which means the variable would reach 1000,that in total would reach the 1000th times.

while(i< 1000){
  sendSignal();
  i++;
}
// continue and break in loops js, well the continue is used when you want to skip sthg in r code and continue with the rest of the code,for ex: 0,1,3,4 to skip thnumber 2 use continue whithe a condition adreesed to number 2, The break on the other hand it terminates prematurely the code regardless the rest of it, for ex: you want to go at sweden by car,which demands you 1000l of fuel for a distance of 300km if you have 2000l, you code a condition that when you ll reach 300km ,the fuel has to be stopped decrement since your engine will be off,cos you ld reach yr destination 

let fuel=500;
let distance=0;
while(fuel>0){
  distance++;
  if (distance>100 && distance <=200){
    continue;
  }
  fuel--;
  if (distance==500){
    break;
  }

}
console.log(distance, fuel);
// we' re going to see another type of loop called a*for loop*
let thePopulation = 100;
//let populationGrowths= thePopulation*1.05;
// using the while loop,predict the number of the population in 10 yrs.
//we pick randomly a letter that will represent a tracking letter of our loo ,will be initialise by assign it to 0
let b = 0;
// this literally means So, the loop is effectively saying "Increase thePopulation by 5% (multiply by 1.05) 10 times." The loop stops when b becomes equal to or greater than 10.
while (b < 10) {
  thePopulation *= 1.05;
  b++;
}
// an iteration:In everyday language, you can think of an iteration as a single cycle or pass through a process or set of instructions. The concept is fundamental to creating efficient and reusable code in programming.In programming, an iteration refers to the repetition of a set of instructions or a block of code. It's the process of repeatedly executing a certain sequence of statements. This is often done within a loop, where the same code is executed multiple times until a certain condition is met.
// at this step you are calling in the console thePopulation
console.log(thePopulation);
// the 'for loop* in this case , you start by the key word for,and the beginning which is assinging a randomly letter to 0, the condition and the the incrementing that appears in every ends of an iteration

for(c=0; c<10; c++){
  thePopulation* 1.05;
}
console.log(thePopulation);