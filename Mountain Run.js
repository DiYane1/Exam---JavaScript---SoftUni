function montBlanc(input) {
    let recordSeconds = Number(input[0]);
    let distanceMeters = Number(input[1]);
    let timePerMeter = Number(input[2]);
  
    let time = distanceMeters * timePerMeter;
    let slowdowns = Math.floor(distanceMeters / 50) * 30;
    let totalTime = time + slowdowns;
  
    if (totalTime < recordSeconds) {
      console.log(`Yes! The new record is ${totalTime.toFixed(2)} seconds.`);
    } else {
      let difference = totalTime - recordSeconds;
      console.log(`No! He was ${difference.toFixed(2)} seconds slower.`);
    }
  }


