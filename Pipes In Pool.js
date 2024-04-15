function pool(input) {
    let V = Number(input[0]);
    let P1 = Number(input[1]);
    let P2 = Number(input[2]);
    let H = Number(input[3]);
  
    let totalWater = P1 * H + P2 * H;
    let percentage = totalWater / V * 100;
  
    if (percentage <= 100) {
      console.log(`The pool is ${percentage.toFixed(2)}% full. Pipe 1: ${(P1 * H / totalWater * 100).toFixed(2)}%. Pipe 2: ${(P2 * H / totalWater * 100).toFixed(2)}%`);
    } else {
      console.log(`For ${H.toFixed(2)} hours the pool overflows with ${(totalWater - V).toFixed(2)} liters.`);
    }
  }
  
  