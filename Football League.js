function calculateFanPercentages(input) {
    let stadiumCapacity = Number(input.shift());
    let totalFans = Number(input.shift());
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let i = 0; i < totalFans; i++) {
        let sector = input.shift();
        switch (sector) {
            case "A":
                sectorA++;
                break;
            case "B":
                sectorB++;
                break;
            case "V":
                sectorV++;
                break;
            case "G":
                sectorG++;
                break;
        }
    }

    let totalFansPercentage = (totalFans / stadiumCapacity) * 100;
    let sectorAPercentage = (sectorA / totalFans) * 100;
    let sectorBPercentage = (sectorB / totalFans) * 100;
    let sectorVPercentage = (sectorV / totalFans) * 100;
    let sectorGPercentage = (sectorG / totalFans) * 100;

    console.log(`${sectorAPercentage.toFixed(2)}%`);
    console.log(`${sectorBPercentage.toFixed(2)}%`);
    console.log(`${sectorVPercentage.toFixed(2)}%`);
    console.log(`${sectorGPercentage.toFixed(2)}%`);
    console.log(`${totalFansPercentage.toFixed(2)}%`);
}