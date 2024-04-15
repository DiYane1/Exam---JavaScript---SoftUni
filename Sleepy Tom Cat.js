function catPlay(input) {
    let freeDays = Number(input[0]);
    
    let workingDays = 365 - freeDays;
    let totalPlayTime = workingDays * 63 + freeDays * 127;
    let normalPlayTime = 30000;
    let diff = Math.abs(normalPlayTime - totalPlayTime);
    let hours = Math.floor(diff / 60);
    let minutes = diff % 60;
  
    if (totalPlayTime > normalPlayTime) {
      console.log(`Tom will run away`);
      console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
      console.log(`Tom sleeps well`);
      console.log(`${hours} hours and ${minutes} minutes less for play`);
    }
  }
  
  