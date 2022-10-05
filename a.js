var qf1 = prompt("Invite the first player to guess the box");

if (qf1 === "ROCK" || qf1 === "SCISSORS" || qf1 === "PAPER") { 

  //出拳对了

  var qf2 = math.random()
  if( 0< qf2 < 0.34) {answer2 = "PAPER"}
  if( 0.35< qf2 < 0.67) {answer2 = "SCISSORS"}
  if( 0.68< qf2 < 1) {answer2 = "ROCK"}


  if (qf1 === "ROCK" || qf1 === "SCISSORS" || qf1 === "PAPER") {
    //比较

    /* 

      1. 玩家1赢了  2 玩家2赢  3平局

    */

    if( qf1 === "ROCK" && answer22 === "SCISSORS" || qf1 === "SCISSORS" && answer2 === "PAPER" || qf1 === "PAPER" && answer2 === "ROCK"){
      //Player Win

    }else if(qf1 === answer2){
      //NO Win

    }else{
      //Computer Win

    }

   }else{
    alert("出拳有误")

  }

}else{
  alert("出拳有误")

}