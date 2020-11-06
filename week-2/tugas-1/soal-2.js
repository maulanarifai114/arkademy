const name = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
]

function searchName(nama, maks, callback) {
    callback(nama, maks)
}

function cari(inputNama, inputMaks) {
    if (typeof inputNama == "string" && typeof inputMaks == "number") {
        let turnStr = name.toString() // Mengubah array menjadi string ==> ["Abigail", "Alexandra"] ==> "Abigail Alexandra"
        let turnLow = turnStr.toLowerCase() // Mengubah string menjadi huruf kecil semua ==> "abigail alexandra"
        let arrLow = turnLow.split(",") // Mengubah string menjadi array, perkata ==> ["abigail", "alexandra"]
        let newArr = [];
        let cekArr = arrLow.forEach((e) => { // e = "abigail"
            let funcSearch = e.search(inputNama)
            // console.log(a);
            if (funcSearch >= 0) {
                let awalHuruf = e.charAt(0).toUpperCase() // upperCase huruf pertama ==> "abigail" ==> "A"
                let hapusAwalHuruf = e.slice(1) // Menghapus huruf pertama ==> "abigail" ==> "bigail"
                let gabungHuruf = awalHuruf.concat(hapusAwalHuruf) // Menggabungkan keduanya "Abigail"
                // return gabungHuruf
                newArr.push(gabungHuruf) // Memasukan huruf ke dalam array ["Abigail"]
            }
        })
        let displayArray = newArr.slice(0, inputMaks); // newArr [ "Abigail", "Alexandra", "Alison"] ==> displayArray [ "Abigail", "Alexandra" ]
        return console.log(displayArray);
    } else {
        return console.log('Masukan nama berbentuk karakter dan maksimal berbentuk angka');
    }
}

searchName("an", 3, cari)