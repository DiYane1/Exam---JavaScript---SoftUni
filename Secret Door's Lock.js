function secretDoorsLock(input) {
    let a = Number(input[0]); 
    let b = Number(input[1]); 
    let c = Number(input[2]); 

    for (let firstNumber = 1; firstNumber <= a; firstNumber++) {
        if (firstNumber % 2 === 0) {
            for (let secondNumber = 2; secondNumber <= b; secondNumber++) {
                if (secondNumber === 2 || secondNumber === 3 || secondNumber === 5 || secondNumber === 7) {
                    for (let thirdNumber = 1; thirdNumber <= c; thirdNumber++) {
                        if (thirdNumber % 2 === 0) {
                            console.log(`${firstNumber} ${secondNumber} ${thirdNumber}`);
                        }
                    }
                }
            }
        }
    }
}