function printDiamond(n) {
   
    for (let row = 1; row <= n; row++) {
        let line = '';
        for (let spaces = 1; spaces <= n - row; spaces++) {
            line += ' ';
        }
        line += '*';
        for (let stars = 1; stars < row; stars++) {
            line += ' *';
        }
        console.log(line);
    }

    for (let row = n - 1; row >= 1; row--) {
        let line = '';
        for (let spaces = 1; spaces <= n - row; spaces++) {
            line += ' ';
        }
        line += '*';
        for (let stars = 1; stars < row; stars++) {
            line += ' *';
        }
        console.log(line);
    }
}

