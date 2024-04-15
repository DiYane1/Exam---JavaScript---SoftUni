function barcodeGenerator(input) {
    let firstNum = input[0];
    let secondNum = input[1];
    let barcodes = '';

    for (let a = firstNum.charAt(0); a <= secondNum.charAt(0); a++) {
        for (let b = firstNum.charAt(1); b <= secondNum.charAt(1); b++) {
            for (let c = firstNum.charAt(2); c <= secondNum.charAt(2); c++) {
                for (let d = firstNum.charAt(3); d <= secondNum.charAt(3); d++) {
                    if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0) {
                        if (barcodes !== '') {
                            barcodes += ' ';
                        }
                        barcodes += a.toString() + b + c + d;
                    }
                }
            }
        }
    }
    console.log(barcodes);
}