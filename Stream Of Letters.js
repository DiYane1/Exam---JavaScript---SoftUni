function solve(input) {
    let word = "";
  
    let isCappear = false;
    let isOappear = false;
    let isNappear = false;
  
    let symbol;
    while ((symbol = input.shift()) !== "End") {
      if (
        !((symbol >= "A" && symbol <= "Z") || (symbol >= "a" && symbol <= "z"))
      ) {
        continue;
      }
  
      switch (symbol) {
        case "c":
          if (isCappear) {
            word += symbol;
          }
          isCappear = true;
          break;
        case "o":
          if (isOappear) {
            word += symbol;
          }
          isOappear = true;
          break;
        case "n":
          if (isNappear) {
            word += symbol;
          }
          isNappear = true;
          break;
        default:
          word += symbol;
          break;
      }
  
      if (isCappear && isOappear && isNappear) {
        process.stdout.write(`${word} `);
        isCappear = false;
        isOappear = false;
        isNappear = false;
        word = "";
      }
    }
    
    console.log();
  }

  