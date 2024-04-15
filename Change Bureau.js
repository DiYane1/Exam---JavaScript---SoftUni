function exchangeRates(input) {
    let bitcoins = Number(input[0]);
    let yuans = Number(input[1]);
    let commission = Number(input[2]);
  
    let btcToLev = bitcoins * 1168;
    let yuanToDollars = yuans * 0.15;
    let dollars = yuanToDollars * 1.76;
    let leva = btcToLev + dollars;
    let euros = leva / 1.95;
    let commissionAmount = euros * (commission / 100);
    let finalEuros = euros - commissionAmount;
  
    console.log(finalEuros.toFixed(2));
  }
  