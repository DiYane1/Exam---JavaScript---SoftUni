function basketballEquipment(input){

    let taxPerYear = Number(input[0]);

    let shoePrice = taxPerYear * 0.60;
    let jerseyPrice = shoePrice * 0.80;
    let ballPrice = jerseyPrice * 0.25;
    let accessoriesPrice = ballPrice * 0.20;
    let totalPrice = taxPerYear + shoePrice + jerseyPrice + ballPrice + accessoriesPrice;

    console.log(totalPrice.toFixed(2));

}