function carNumber(input) {
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let result = '';

    for (let a = firstNum; a <= secondNum; a++) {
        for (let b = firstNum; b <= secondNum; b++) {
            for (let c = firstNum; c <= secondNum; c++) {
                for (let d = firstNum; d <= secondNum; d++) {
                    if (a % 2 === 0 && d % 2 !== 0 || a % 2 !== 0 && d % 2 === 0) {
                        if (a > d && (b + c) % 2 === 0) {
                            if (result !== '') { result += ' '; }
                            result += a.toString() + b + c + d;
                        }
                    }
                }

            }
        }
    }
    console.log(result);
}