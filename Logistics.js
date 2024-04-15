function logistics(input) {
    let index = 0; 
    let loadCount = Number(input[index]);
    index++;
    const microbusPricePerTon = 200;
    const truckPricePerTon = 175; 
    const trainPricePerTon = 120; 
    let loadTotalWeight = 0; 
    let microbusLoads = 0; 
    let truckLoads = 0; 
    let trainLoads = 0; 

    for (let i = 0; i < loadCount; i++) {
        let currentLoad = Number(input[index]); 
        index++; 

        if (currentLoad <= 3) {
            microbusLoads += currentLoad;     
        } else if (currentLoad > 3 && currentLoad < 12) {
            truckLoads += currentLoad; 
        } else if (currentLoad >= 12) {
            trainLoads += currentLoad; 
        }
        loadTotalWeight += currentLoad; 
    }

    let microbusPercentage = microbusLoads / loadTotalWeight * 100;
    let truckPercentage = truckLoads / loadTotalWeight * 100;
    let trainPercentage = trainLoads / loadTotalWeight * 100;
    let avgPrice = ((microbusLoads * microbusPricePerTon) + (truckLoads * truckPricePerTon) + (trainLoads * trainPricePerTon)) / loadTotalWeight; 

    console.log((avgPrice).toFixed(2));
    console.log(`${(microbusPercentage).toFixed(2)}%`);
    console.log(`${(truckPercentage).toFixed(2)}%`);
    console.log(`${(trainPercentage).toFixed(2)}%`);
}