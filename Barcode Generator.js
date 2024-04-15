function barcode (input){
    let m = prompt();
    let n = prompt();

    let count = 0;
    let a, b, c, d;
    for (let i of m) {
        if (count === 0) {
        a = parseInt(i);
    } else if (count === 1) {
         b = parseInt(i);
     } else if (count === 2) {
         c = parseInt(i);
     } else {
         d = parseInt(i);
     }
     count++;
    }
    count = 0;
    for (let i of n) {
    if (count === 0) {
    a1 = parseInt(i);
  } else if (count === 1) {
    b1 = parseInt(i);
  } else if (count === 2) {
    c1 = parseInt(i);
  } else {
    d1 = parseInt(i);
  }
  count++;
}
for (let i = a; i <= a1; i++) {
  for (let j = b; j <= b1; j++) {
    for (let k = c; k <= c1; k++) {
      for (let l = d; l <= d1; l++) {
        if (i % 2 !== 0 && j % 2 !== 0 && k % 2 !== 0 && l % 2 !== 0) {
          console.log(`${i}${j}${k}${l} `);
        }
      }
    }
  }
}
}