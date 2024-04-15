function calculateVacation(input) {
    const budget = parseFloat(input[0]);
    const season = input[1];
    let location, accommodation, accommodationPrice;

    if (budget <= 1000) {
        accommodation = "Camp";
        location = (season === "Summer") ? "Alaska" : "Morocco";
        accommodationPrice = (season === "Summer") ? budget * 0.65 : budget * 0.45;
    } else if (budget > 1000 && budget <= 3000) {
        accommodation = "Hut";
        location = (season === "Summer") ? "Alaska" : "Morocco";
        accommodationPrice = (season === "Summer") ? budget * 0.80 : budget * 0.60;
    } else {
        accommodation = "Hotel";
        location = (season === "Summer") ? "Alaska" : "Morocco";
        accommodationPrice = budget * 0.90;
    }

    console.log(`${location} - ${accommodation} - ${accommodationPrice.toFixed(2)}`);
}
