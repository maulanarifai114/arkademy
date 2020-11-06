// Buat program yang menghitung rata-rata UN
// beserta gradenya, dengan mengisi 4 nilai
// yakni Bahasa indonesia, Bahasa Inggris
// Matematika dan IPA, yang di dalam program
// tersebut memiliki validasi yaitu semua nilai
// tersebut harus diisi dan juga untuk grade
// memiliki kondisi dengan ketentuan sebagai
// berikut:
// 90 - 100 = A
// 80 - 89 = B
// 70 - 79 = C
// 60 - 69 = D
// 0 - 59 = E

const mtk = 80;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

const cekAngka = mtk + bahasaIndonesia + bahasaInggris + ipa;
const rataRata = ((mtk + bahasaIndonesia + bahasaInggris + ipa) / 4);

if (typeof cekAngka === "number") {
    console.log('angka');
    console.log(`Rata-rata = ${rataRata}`);
    if (rataRata >= 90 && rataRata <= 100) {
        console.log("Grade = A");
    } else if (rataRata >= 80 && rataRata <= 89) {
        console.log("Grade = B");
    } else if (rataRata >= 70 && rataRata <= 79) {
        console.log("Grade = C");
    } else if (rataRata >= 60 && rataRata <= 69) {
        console.log("Grade = D");
    } else if (rataRata >= 0 && rataRata <= 59) {
        console.log("Grade = E");
    } else {
        console.log("Nilai terlalu berlebih/kurang");
    }

} else {
    console.log('bukan angka');
}