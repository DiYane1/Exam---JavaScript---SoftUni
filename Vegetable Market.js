function vegetableMarket(input){
    let vegetables = Number(input[0]);
    let fruites = Number(input[1]);
    let vegetablesKg = Number(input[2]);
    let fruitesKg = Number(input[3]);

    let vegetablesPrice = vegetables * vegetablesKg;
    let fruitesPrice = fruites * fruitesKg;
    let totalPrice = vegetablesPrice + fruitesPrice;
    let euro = totalPrice / 1.94

    console.log(euro.toFixed(2))
}