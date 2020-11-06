function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal < nilaiAkhir) {
        if (dataArray.length > 5) {
            let newArr = []
            dataArray.forEach(function (e) {
                if (e >= nilaiAwal && e <= nilaiAkhir) {
                    return newArr.push(e)
                }
            })

            newArr.sort((a, b) => a - b)

            if (newArr.length == 0) {
                console.log('Jumlah angka dalam dataArray tidak ada');
            } else {
                console.log(newArr);
            }

        } else {
            console.log('Data Array harus lebih dari 5');
        }

    } else {
        return console.log("Nilai akhir harus lebih besar dari nilai awal");
    }
}
seleksiNilai(5, 15, [1, 2, 3, 4, 16, 17])