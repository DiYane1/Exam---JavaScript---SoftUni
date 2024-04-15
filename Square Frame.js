function drawSquareFrame(n) {
    if (n < 3) {
        console.log("+" + "-".repeat(n - 2) + "+");
    }

    let topBottom = "+";
    for (let i = 0; i < n - 2; i++) {
        topBottom += " -";
    }
    topBottom += " +";
    console.log(topBottom);

    for (let i = 0; i < n - 2; i++) {
        let middle = "|";
        for (let j = 0; j < n - 2; j++) {
            middle += " -";
        }
        middle += " |";
        console.log(middle);
    

    console.log(topBottom);
    }
}
