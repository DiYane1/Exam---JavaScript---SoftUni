function joinery(input) {
    let pvcCount = Number(input[0]);
    let pvcType = input[1];
    let deliveryType = input[2];
    let pvcPrice = 0;
    let total = 0;
    let priceAfterDiscount = 0;

    if (pvcCount <= 10) {
        console.log(`Invalid order`)
    } else if (pvcCount > 10) {
        switch (pvcType) {
            case '90X130':
                pvcPrice = 110;
                total = pvcPrice * pvcCount;

                if (pvcCount > 60) {
                    priceAfterDiscount = total - total * 0.08;

                } else if (pvcCount > 30) {
                    priceAfterDiscount = total - total * 0.05;

                } else {
                    priceAfterDiscount = total;
                }

                break;
            case '100X150':
                pvcPrice = 140;
                total = pvcPrice * pvcCount;

                if (pvcCount > 80) {
                    priceAfterDiscount = total - total * 0.10;
                } else if (pvcCount > 40) {
                    priceAfterDiscount = total - total * 0.06;
                } else {
                    priceAfterDiscount = total;
                }

                break;

            case '130X180':
                pvcPrice = 190;
                total = pvcPrice * pvcCount;

                if (pvcCount > 50) {
                    priceAfterDiscount = total - total * 0.12;
                } else if (pvcCount > 20) {
                    priceAfterDiscount = total - total * 0.07;
                } else {
                    priceAfterDiscount = total;
                }

                break;

            case '200X300':
                pvcPrice = 250;
                total = pvcPrice * pvcCount;

                if (pvcCount > 50) {
                    priceAfterDiscount = total - total * 0.14;
                } else if (pvcCount > 25) {
                    priceAfterDiscount = total - total * 0.09;
                } else {
                    priceAfterDiscount = total;
                }

                break;
        }

        if (deliveryType === 'With delivery') {
            priceAfterDiscount = priceAfterDiscount + 60
        }

        if (pvcCount > 99) {
            priceAfterDiscount = priceAfterDiscount * 0.96
        }

        console.log(priceAfterDiscount.toFixed(2) + ' BGN')
    }
}
