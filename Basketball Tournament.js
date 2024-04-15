function basketball(input) {
    let index = 0;
    let command = input[index];
    index++;

    let wins = 0;
    let losts = 0;

    while (command !== `End of tournaments`) {
        let tournamentName = command;
        let gameCount = Number(input[index]);
        index++;
        let currentGame = 1;

        while (currentGame <= gameCount) {
            let desssiPoints = Number(input[index]);
            index++;
            let otherPoints = Number(input[index]);
            index++;

            if (desssiPoints > otherPoints) {
                wins++;
                console.log(`Game ${currentGame} of tournament ${tournamentName}: win with ${desssiPoints - otherPoints} points.`);
            } else {
                losts++;
                console.log(`Game ${currentGame} of tournament ${tournamentName}: lost with ${otherPoints - desssiPoints} points.`);
            }

            currentGame++;

        }

        command = input[index];
        index++;

        if (command === `End of tournaments`) {
            break;
        }
    }

    let all = wins + losts;

    let winsPercentage = (wins / all) * 100;
    let lostsPercentage = (losts / all) * 100;

    console.log(`${winsPercentage.toFixed(2)}% matches win`);
    console.log(`${lostsPercentage.toFixed(2)}% matches lost`);
}