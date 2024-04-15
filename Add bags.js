function baggageCost(input) {
    let price = Number(input[0]);
    let weight = Number(input[1]);
    let days = Number(input[2]);
    let bags = Number(input[3]);
  
    let tax = 0;
  
    if (weight <= 10) {
      tax = price * 0.2;
    } else if (weight > 10 && weight <= 20) {
      tax = price * 0.5;
    } else {
      tax = price;
    }
  
    if (days > 30) {
      tax *= 1.1;
    } else if (days >= 7 && days <= 30) {
      tax *= 1.15;
    } else if (days < 7) {
      tax *= 1.4;
    }
  
    let totalCost = bags * tax;
  
    console.log(`The total price of bags is: ${totalCost.toFixed(2)} lv.`);
  }
  