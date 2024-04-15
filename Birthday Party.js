function birthdayParty(input){
    let hallRent = Number(input[0]); //2250
    
    let cakePrice = hallRent * 0.2; //450
    let drinksPrice = cakePrice * 0.55; // 450 - 202.5 = 247.5
    let animatorPrice = hallRent / 3; // 750 
    
    let totalBudget = hallRent + cakePrice + drinksPrice + animatorPrice; //2250 + 450 + 247.5 + 750 = 3697.5
    
    console.log(totalBudget);
} 
