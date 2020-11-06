let printSegitiga = 5;

if (typeof printSegitiga == "number") {
    for (let i = printSegitiga; i >= 1; i--) {
        let spasi = '';
        for (let j = 1; j <= i; j++) {
            spasi += j
        }
        console.log(spasi);
    }
} else {
    console.log('Data harus number');
}