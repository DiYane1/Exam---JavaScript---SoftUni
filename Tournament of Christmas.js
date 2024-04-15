function examPrep(input) {
    let index = 0;
    let days = Number(input[index]);
    index++;
    let command = input[index];
    let totalMoney = 0;
    let winCounter = 0;
    let loseCounter = 0;

    for (let currentDay = 0; currentDay <= days; currentDay++) {
        let victoriesForTheDay = 0;
        let totalGamesForTheDay = 0;
    
        while (command !== 'Finish') {
            totalGamesForTheDay++;
            // ...
        }
    
        let moneyForTheDay = 20 * victoriesForTheDay;
        if (victoriesForTheDay > totalGamesForTheDay) {
            moneyForTheDay *= 1.1;
            daysWon++;
        }
        money += moneyForTheDay;
    }
    
    if (daysWon > days) {
        money *= 1.2;
    }
    
    }
    if (winCounter > loseCounter) {
        totalMoney += totalMoney * 0.1;
    }
    if (winCounter > loseCounter) {
        console.log(`You won the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${totalMoney.toFixed(2)}`);
    }
}
  
  