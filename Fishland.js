function fishLand(input){
    let skumriya = Number(input[0]);
    let caca = Number(input[1]);
    let palamud = Number(input[2]);
    let safrid = Number(input[3]);
    let shells = Number(input[4]);

    let palamudPrice = skumriya + (skumriya * 0.60);
    let palamudSum = palamud * palamudPrice;
    let safridPrice = caca + (caca * 0.80);
    let safridSum = safrid * safridPrice;
    let shellsPrice = shells * 7.50;
    let totalSum = palamudSum + safridSum + shellsPrice;

    console.log(totalSum.toFixed(2));
}