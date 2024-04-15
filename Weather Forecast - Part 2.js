function weatherForecast(input){
    let weather = Number(input[0]);

    if (weather >= 5 && weather < 12){
        console.log("Cold");

    } else if (weather >= 12 && weather < 15){
        console.log("Cool");

    } else if (weather >= 15 && weather <= 20){
        console.log("Mild");

    } else if(weather > 20 && weather < 26){
        console.log("Warm");

    } else if (weather >= 26 && weather <= 35){
        console.log("Hot");
    } else {
        console.log("unknown")
    }
}