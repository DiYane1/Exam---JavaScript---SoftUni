function luckyNumbers(input) {
    let number = Number(input[0]);
    let result = '';

    for (let i = 1; i < 10; i++) {
        for (let b = 1; b < 10; b++) {
            for (let c = 1; c < 10; c++) {
                for (let d = 1; d < 10; d++) {
                    let firstTwo = i + b;
                    let secondTwo = c + d;
                    if (firstTwo === secondTwo) {
                        if (number % firstTwo === 0 && number % secondTwo === 0) {
                            if (result !== '') { result += ' '; }
                            result += i.toString() + b + c + d;
                        }
                    }
                }
            }
        }
    }
    console.log(result);
}