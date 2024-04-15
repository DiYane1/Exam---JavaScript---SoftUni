function calculateBaggagePrice(input) {
    let baggagePriceAbove20kg = Number(input.shift());
    let baggageWeight = Number(input.shift());
    let daysUntilTravel = Number(input.shift());
    let numberOfBags = Number(input.shift());

    let baggagePrice = 0;

    if (baggageWeight <= 10) {
        baggagePrice = 0.2 * baggagePriceAbove20kg;
    } else if (baggageWeight > 10 && baggageWeight <= 20) {
        baggagePrice = 0.5 * baggagePriceAbove20kg;
    } else {
        baggagePrice = baggagePriceAbove20kg;
    }

    if (daysUntilTravel > 30) {
        baggagePrice *= 1.1;
    } else if (daysUntilTravel >= 7 && daysUntilTravel <= 30) {
        baggagePrice *= 1.15;
    } else {
        baggagePrice *= 1.4;
    }

    let totalPrice = baggagePrice * numberOfBags;

    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`);
}

