function energyBooster(input){
    let fruit = input.shift();
    let size = input.shift();
    let numberSets = Number(input.shift())

    let sum = 0;
    let price = 0;
    let discount = 0;

    if(fruit === 'Watermelon'){
        if(size === 'small'){
            sum = 2 * 56;
        } else {
            sum = 5 * 28.70;
        }

    } else if(fruit === 'Mango'){
        if(size === 'small'){
            sum = 2 * 36.66;
        } else {
            sum = 5 * 19.60;
        }

    } else if(fruit === 'Pineapple'){
        if(size === 'small'){
            sum = 2 * 42.10;
        } else {
            sum  = 5 * 24.80;
        }
    } else if(fruit === 'Raspberry'){
        if(size === 'small'){
            sum = 2 * 20;
        } else {
            sum = 5 * 15.20;
        }
    }
    price = numberSets * sum;

    if(price >= 400 && price <= 1000){
        discount = price * 0.85;
        console.log(`${discount.toFixed(2)} lv.`);
    } else if (price > 1000){
        discount = price * 0.50;
        console.log(`${discount.toFixed(2)} lv.`);
    } else {
        console.log(`${price.toFixed(2)} lv.`);
    }

}