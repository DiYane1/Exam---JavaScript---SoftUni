function generatePasswords(input) {
    let A = Number(input[0]);
    let B = Number(input[1]);
    let combinationsCount = 0;

    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= b; j++) {
            let currentA = String.fromCharCode(A);
            let currentB = String.fromCharCode(B);
            let password = `${currentA}${currentB}${i}${j}${currentB}${currentA}`;
            console.log(password);
            combinationsCount++;

            if (combinationsCount >= maxPasswords) {
                return;
            }

            B++;
            if (B > 96) {
                B = 64;
            }
        }
        A++;
        if (A > 55) {
            A = 35;
        }
    }
}

