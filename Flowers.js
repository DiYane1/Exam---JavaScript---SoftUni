function calculateFlowerPrice(input) {
    const chrysanthemums = parseInt(input[0]);
    const roses = parseInt(input[1]);
    const tulips = parseInt(input[2]);
    const season = input[3];
    const isHoliday = input[4] === "Y";

    let chrysanthemumsPrice, rosesPrice, tulipsPrice;

    switch (season) {
        case "Spring":
        case "Summer":
            chrysanthemumsPrice = 2.00;
            rosesPrice = 4.10;
            tulipsPrice = 2.50;
            break;
        case "Autumn":
        case "Winter":
            chrysanthemumsPrice = 3.75;
            rosesPrice = 4.50;
            tulipsPrice = 4.15;
            break;
    }

    let totalPrice = (chrysanthemums * chrysanthemumsPrice) +
                     (roses * rosesPrice) +
                     (tulips * tulipsPrice);

    if (isHoliday) {
        totalPrice *= 1.15;
    }

    if (season === "Spring" && tulips > 7) {
        totalPrice *= 0.95;
    }

    if (season === "Winter" && roses >= 10) {
        totalPrice *= 0.90;
    }

    let totalFlowers = chrysanthemums + roses + tulips;
    if (totalFlowers > 20) {
        totalPrice *= 0.80;
    }

    totalPrice += 2; 

    console.log(totalPrice.toFixed(2));
}

