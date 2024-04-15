function calculateDonation(input) {
    const juniorCount = parseInt(input[0]);
    const seniorCount = parseInt(input[1]);
    const trackType = input[2];

    let juniorFee, seniorFee;
    
    switch (trackType) {
        case "trail":
            juniorFee = 5.50;
            seniorFee = 7;
            break;
        case "cross-country":
            juniorFee = 8;
            seniorFee = 9.50;
            break;
        case "downhill":
            juniorFee = 12.25;
            seniorFee = 13.75;
            break;
        case "road":
            juniorFee = 20;
            seniorFee = 21.50;
            break;
    }

    let totalParticipants = juniorCount + seniorCount;
    let totalFee = (juniorCount * juniorFee) + (seniorCount * seniorFee);

    if (totalParticipants >= 50 && trackType === "cross-country") {
        totalFee *= 0.75; 
    }

    let organizersFee = totalFee * 0.05; 

    let donation = totalFee - organizersFee;
    console.log(donation.toFixed(2));
}

