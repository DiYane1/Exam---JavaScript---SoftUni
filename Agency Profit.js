function calculateProfit(input) {
    let airline = input.shift();
    let adultTickets = Number(input.shift());
    let childTickets = Number(input.shift());
    let adultTicketPrice = Number(input.shift());
    let serviceFee = Number(input.shift());

    let childTicketPrice = 0.3 * adultTicketPrice;
    let totalRevenue = (adultTickets * (adultTicketPrice + serviceFee)) + (childTickets * (childTicketPrice + serviceFee));
    let agencyProfit = totalRevenue * 0.2;

    console.log(`The profit of your agency from ${airline} tickets is ${agencyProfit.toFixed(2)} lv.`);
}
