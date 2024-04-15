function everest(input) {
    let index = 0;
    let command = input[index];
    index++;
    let days = 1;
    let target =  8848;
    let totalMeters = 5364;

    while (command !== "END" ) {
        let nights = command;
        let climberMeters = Number(input[index]);
        index++;

        if (nights === "Yes") {
            days++;
        } 
       
        totalMeters+= climberMeters;

        if (days >= 5 || totalMeters >= target) {
            break;
        }
        command = input[index];
        index++
    }

    if (totalMeters >= target) {
        console.log(`Goal reached for ${days} days!`)
    } else {
        console.log(`Failed!`)
        console.log(`${totalMeters}`)
    }
}





