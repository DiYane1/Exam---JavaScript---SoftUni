function solve(input) {
    let index = 0;
    let player1 = input[index];
    index++;
    let player2 = input[index];
    index++;
    let comand = input[index];
    index++;
  
    let playerOnePoints = 0;
    let playerTwoPoints = 0;
    let endGame = "";
  
    while (comand !== "End of game") {
      let playerOneCard = Number(comand);
      let playerTwoCard = Number(input[index]);
      index++;
  
      if (playerOneCard === playerTwoCard) {
        endGame = "Number wars!";
        console.log("Number wars!");
  
        comand = input[index];
        index++;
  
        continue;
      } else if (endGame === "Number wars!") {
        if (playerOnePoints > playerTwoPoints) {
          console.log(`${player1} is winner with ${playerOnePoints} points`);
        } else {
          console.log(`${player2} is winner with ${playerTwoPoints} points`);
        }
        return;
  
      } else if (playerOneCard > playerTwoCard) {
        playerOnePoints += playerOneCard - playerTwoCard;
      } else {
        playerTwoPoints += playerTwoCard - playerOneCard;
      }
  
      comand = input[index];
      index++;
    }
    if(comand === "End of game"){
    console.log(`${player1} has ${playerOnePoints} points`);
    console.log(`${player2} has ${playerTwoPoints} points`);
    }
  }