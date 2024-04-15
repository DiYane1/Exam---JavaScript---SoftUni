function catWalk(input) {
    let minutesPerWalk = Number(input[0]);
    let walksPerDay = Number(input[1]);
    let dailyCalories = Number(input[2]);
  
    let caloriesBurnedPerWalk = minutesPerWalk * 5;
    let totalCaloriesBurnedPerDay = caloriesBurnedPerWalk * walksPerDay;
  
    let percentageOfCaloriesBurned = (totalCaloriesBurnedPerDay / dailyCalories) * 100;
  
    if (percentageOfCaloriesBurned >= 50) {
      console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${totalCaloriesBurnedPerDay}.`);
    } else {
      console.log(`No, the walk for your cat is not enough. Burned calories per day: ${totalCaloriesBurnedPerDay}.`);
    }
  }
