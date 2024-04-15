function gameResult(input) {
    let moves = Number(input.shift());
    let totalPoints = 0;
    let from0to9 = 0;
    let from10to19 = 0;
    let from20to29 = 0;
    let from30to39 = 0;
    let from40to50 = 0;
    let invalidNumbers = 0;

    for (let i = 0; i < moves; i++) {
        let number = Number(input.shift());

        if (number >= 0 && number <= 9) {
            totalPoints += number * 0.2;
            from0to9++;
        } else if (number >= 10 && number <= 19) {
            totalPoints += number * 0.3;
            from10to19++;
        } else if (number >= 20 && number <= 29) {
            totalPoints += number * 0.4;
            from20to29++;
        } else if (number >= 30 && number <= 39) {
            totalPoints += 50;
            from30to39++;
        } else if (number >= 40 && number <= 50) {
            totalPoints += 100;
            from40to50++;
        } else {
            totalPoints /= 2;
            invalidNumbers++;
        }
    }

    let from0to9Percent = (from0to9 / moves) * 100;
    let from10to19Percent = (from10to19 / moves) * 100;
    let from20to29Percent = (from20to29 / moves) * 100;
    let from30to39Percent = (from30to39 / moves) * 100;
    let from40to50Percent = (from40to50 / moves) * 100;
    let invalidNumbersPercent = (invalidNumbers / moves) * 100;

    console.log(totalPoints.toFixed(2));
    console.log(`From 0 to 9: ${from0to9Percent.toFixed(2)}%`);
    console.log(`From 10 to 19: ${from10to19Percent.toFixed(2)}%`);
    console.log(`From 20 to 29: ${from20to29Percent.toFixed(2)}%`);
    console.log(`From 30 to 39: ${from30to39Percent.toFixed(2)}%`);
    console.log(`From 40 to 50: ${from40to50Percent.toFixed(2)}%`);
    console.log(`Invalid numbers: ${invalidNumbersPercent.toFixed(2)}%`);
}

