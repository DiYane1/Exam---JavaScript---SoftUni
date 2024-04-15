function calculateCarRental(input) {
    const budget = parseFloat(input[0]);
    const season = input[1];
    let carType, carPrice, carClass;

    if (budget <= 100) {
        carClass = "Economy class";
        carType = (season === "Summer") ? "Cabrio" : "Jeep";
        carPrice = (season === "Summer") ? budget * 0.35 : budget * 0.65;
    } else if (budget > 100 && budget <= 500) {
        carClass = "Compact class";
        carType = (season === "Summer") ? "Cabrio" : "Jeep";
        carPrice = (season === "Summer") ? budget * 0.45 : budget * 0.80;
    } else {
        carClass = "Luxury class";
        carType = "Jeep";
        carPrice = budget * 0.90;
    }

    console.log(carClass);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);
}
