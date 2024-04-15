function fuelTank(input) {
    let fuelType = input[0].toLowerCase();
    let fuelLevel = Number(input[1]);
  
    if (fuelType === "diesel") {
      if (fuelLevel >= 25) {
        console.log("You have enough diesel.");
      } else {
        console.log("Fill your tank with diesel!");
      }
    } else if (fuelType === "gasoline") {
      if (fuelLevel >= 25) {
        console.log("You have enough gasoline.");
      } else {
        console.log("Fill your tank with gasoline!");
      }
    } else if (fuelType === "gas") {
      if (fuelLevel >= 25) {
        console.log("You have enough gas.");
      } else {
        console.log("Fill your tank with gas!");
      }
    } else {
      console.log("Invalid fuel!");
    }
  }

  