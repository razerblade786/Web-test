var userSelection = prompt("Invite the first player to guess the box(ROCK SCISSORS AND PAPER)");

if (userSelection === "ROCK" || userSelection === "SCISSORS" || userSelection === "PAPER") { 


  var computerSelection = Math.random()
  if( 0 <=computerSelection && computerSelection <= 0.34) {answer2 = "PAPER"}
  if( 0.35 <= computerSelection && computerSelection <= 0.67) {answer2 = "SCISSORS"}
  if( 0.68 <= computerSelection && computerSelection<= 1) {answer2 = "ROCK"}


  if (userSelection === "ROCK" || userSelection === "SCISSORS" || userSelection === "PAPER") {

    if( userSelection === "ROCK" && answer2 === "SCISSORS" || userSelection === "SCISSORS" && answer2 === "PAPER" || userSelection === "PAPER" && answer2 === "ROCK"){
      window.alert("User Wins");

    }else if(userSelection === answer2){
      window.alert("It's a tie");

    }else{
      window.alert("Computer Win");

    }
    console.log("Player choose: " + userSelection + " Computer choose: " + answer2)

   }else{
    alert("WRONG ANSWER")

  }

}else{
  alert("WRONG ANSWER")

}