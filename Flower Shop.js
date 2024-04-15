function flowerShop(input) {
    let magnolias = Number(input[0]);
    let zumbulis = Number(input[1]);
    let roses = Number(input[2]);
    let cacti = Number(input[3]);
    let giftPrice = Number(input[4]);
  
    let totalPrice = magnolias * 3.25 + zumbulis * 4 + roses * 3.5 + cacti * 8;
    let tax = totalPrice * 0.05;
    let profit = totalPrice - tax;
  
    if (profit >= giftPrice) {
      console.log(`She is left with ${Math.floor(profit - giftPrice)} leva.`);
    } else {
      console.log(`She will have to borrow ${Math.ceil(giftPrice - profit)} leva.`);
    }
  }
