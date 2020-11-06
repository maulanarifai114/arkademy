// Deteksi Palindrom
// Diberikan sebuah teks, periksa apakah kata tersebut adalah palindrom atau tidak.
// Misalnya teks "Malam", output = palindrom

function checkPalindrome(word) {
    let wordLow = word.toLowerCase()
    let l = wordLow.length;
    for (let i = 0; i < l / 2; i++) {
        let awal = wordLow.charAt(i);
        let akhir = wordLow.charAt(l - 1 - i);
        if (awal !== akhir) {
            return false;
        }
    }
    return true;
}

let cekKata = 'malam';

if (checkPalindrome(cekKata)) {
    console.log("Kata ini adalah palindrom");
} else {
    console.log("Kata ini BUKAN palindrom");
}