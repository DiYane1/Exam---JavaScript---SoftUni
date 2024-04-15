function calculateCost(input) {
    let season = input[0];
    let typeGroup = input[1];
    let numStudents = Number(input[2]);
    let numNight = Number(input[3]);

    let sport;
    let pricePerNight;
    let discount;
  
    if (season === "Winter") {
      if (typeGroup === "boys") {
        sport = "Judo";
        pricePerNight = numStudents * numNight * 9.60;
      } else if (typeGroup === "girls") {
        sport = "Gymnastics";
        pricePerNight = numStudents * numNight * 9.60;
      } else if (typeGroup === "mixed") {
        sport = "Ski";
        pricePerNight = numStudents * numNight * 10;
      }
    } else if (season === "Spring") {
      if (typeGroup === "boys") {
        sport = "Tennis";
        pricePerNight = numStudents * numNight * 7.20;
      } else if (typeGroup === "girls") {
        sport = "Athletics";
        pricePerNight = numStudents * numNight * 7.20;
      } else if (typeGroup === "mixed") {
        sport = "Cycling";
        pricePerNight = numStudents * numNight * 9.50;
      }
    } else if (season === "Summer") {
      if (typeGroup === "boys") {
        sport = "Football";
        pricePerNight = numStudents * numNight * 15;
      } else if (typeGroup === "girls") {
        sport = "Volleyball";
        pricePerNight = numStudents * numNight * 15;
      } else if (typeGroup === "mixed") {
        sport = "Swimming";
        pricePerNight = numStudents * numNight * 20;
      }
    }
  
    if (numStudents < 10){
        discount = 0
    } else if (numStudents >= 10 && numStudents < 20) {
      discount = pricePerNight * 0.05;
    } else if (numStudents >= 20 && numStudents < 50) {
      discount = pricePerNight * 0.15;
    } else if (numStudents >= 50) {
      discount = pricePerNight * 0.50;
    } 
  
    let totalCost = pricePerNight - discount;
    console.log(`${sport} ${totalCost.toFixed(2)} lv.`);
  }
  