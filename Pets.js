function foodSupply(input) {
    let days = Number(input[0]);
    let food = Number(input[1]);
    let dogFoodPerDay = Number(input[2]);
    let catFoodPerDay = Number(input[3]);
    let turtleFoodPerDay = Number(input[4]);
  
    let totalFoodPerDay = dogFoodPerDay + catFoodPerDay + turtleFoodPerDay / 1000;
    let totalFoodNeeded = totalFoodPerDay * days;
  
    if (totalFoodNeeded <= food) {
      console.log(`${Math.floor(food - totalFoodNeeded)} kilos of food left.`);
    } else {
      console.log(`${Math.ceil(totalFoodNeeded - food)} more kilos of food are needed.`);
    }
  }
