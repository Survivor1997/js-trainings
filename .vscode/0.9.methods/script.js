let player={
  health:25,
  fun:0,
    eat:function(food){
      if(food=='apple'){
        this.health += 10;
      }
      else if(food=='candy'){
       this.health -= 5
      this.fun += 5
      }
    },
    play: function() {
      console.log('play');
      return this.fun += 20;
    }
}
player.eat('candy');
console.log(player.health);
player.eat ('apple');
console.log(player.health);