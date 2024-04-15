function monthlyExpenses(input) {
    let months = Number(input.shift());
    let totalElectricity = 0;
    let totalWater = 0;
    let totalInternet = 0;
    let totalOther = 0;

    for (let i = 0; i < months; i++) {
        let electricity = Number(input.shift());
        totalElectricity += electricity;
        totalWater += 20;
        totalInternet += 15;
        totalOther += (electricity + 20 + 15) * 1.2;
    }

    let average = (totalElectricity + totalWater + totalInternet + totalOther) / months;

    console.log(`Electricity: ${totalElectricity.toFixed(2)} lv`);
    console.log(`Water: ${totalWater.toFixed(2)} lv`);
    console.log(`Internet: ${totalInternet.toFixed(2)} lv`);
    console.log(`Other: ${totalOther.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}
