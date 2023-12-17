let distance = 250;
let fuel=100;
let distanceCondition= distance <=200 && distance >=100
let isEngineBroken= true
// 'not' operator ! ,'and' operators &&, 'or' operator ||
if(!isEngineBroken ||distance>200){
  console.log('you wont make it')
}

else if( distanceCondition && fuel >= 100 ){
  console.log('you will make it');
}
else if (distance<100 && fuel>=25){
  console.log('you will make it');
}
