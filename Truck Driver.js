function calculateSalary(input) {
    
    let season = input[0];
    let kmPerMonth = Number(input[1]);
  
    let salaryPerKm;
  
    if (season == "Spring" || season == "Autumn") {
      if (kmPerMonth <= 5000) {
        salaryPerKm = 0.75;
      } else if (kmPerMonth <= 10000) {
        salaryPerKm = 0.95;
      } else if (kmPerMonth <= 20000) {
        salaryPerKm = 1.45;
      }
    } else if (season == "Summer") {
      if (kmPerMonth <= 5000) {
        salaryPerKm = 0.90;
      } else if (kmPerMonth <= 10000) {
        salaryPerKm = 1.10;
      } else if (kmPerMonth <= 20000) {
        salaryPerKm = 1.45;
      }
    } else if (season == "Winter") {
      if (kmPerMonth <= 5000) {
        salaryPerKm = 1.05;
      } else if (kmPerMonth <= 10000) {
        salaryPerKm = 1.25;
      } else if (kmPerMonth <= 20000) {
        salaryPerKm = 1.45;
      }
    }
  
    let salary = kmPerMonth * salaryPerKm * 4;
    let tax = salary * 0.10;
    let netSalary = salary - tax;
  
    console.log(netSalary.toFixed(2));
  }
