//object declaration
let selassy={
  age :30,
  sexe:'M',
  status:'employed',
  isHeAdult: true,
  race :{
    father:'congolese',
    mother:'ghaneen',
   nationality:'british',
  }
}
//log  the properties
console.log(selassy);
//log one of the properties , 2 ways
console.log(selassy.age);
console.log(selassy['age']);
//change one of the properties
selassy.isHeAdult = false;
console.log(selassy.isHeAdult);
//acesse an object's object
console.log (selassy.race.mother);
console.log(selassy['race']['father']);
// challenge: modify the nationality of selassy
selassy.race.nationality= 'Ghaneen';
console.log(selassy.race.nationality);
console.log(selassy['race']['nationality']);
console.log(selassy);