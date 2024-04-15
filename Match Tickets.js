function calculateEuroTickets(input) {
    let budget = parseFloat(input[0]);
    let category = input[1];
    let groupSize = parseInt(input[2]);
    
    let ticketPrice = (category === "VIP") ? 499.99 : 249.99;
    
    let percentage;
    if (groupSize >= 50) {
        percentage = 0.25;
    } else if (groupSize >= 25) {
        percentage = 0.4;
    } else if (groupSize >= 10) {
        percentage = 0.5;
    } else if (groupSize >= 5) {
        percentage = 0.6;
    } else {
        percentage = 0.75;
    }
    
    let totalTicketCost = ticketPrice * groupSize;
    let transportCost = budget * percentage;
    
    if (budget >= totalTicketCost + transportCost) {
        let remainingMoney = budget - totalTicketCost - transportCost;
        console.log(`Yes! You have ${remainingMoney.toFixed(2)} leva left.`);
    } else {
        let neededMoney = totalTicketCost + transportCost - budget;
        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
    }
}