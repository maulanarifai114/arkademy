// 1. slice()
// Mengekstrak bagian dari string dan mengembalikan bagian yang diekstraksi dalam string baru.
let str1 = 'Apel, Jeruk, Semangka';
let res1 = str1.slice(0, 4);
console.log(res1); // Output "Apel"



// 2. replace()
// Menggantikan nilai yang ditentukan dengan nilai lain dalam sebuah string
let str2 = 'Bootcamp Arkademy';
let res2 = str2.replace('Bootcamp', 'Bootcamp Online');
console.log(res2); // Output "Bootcamp Online Arkademy"
console.log(str2);



// 3. toUpperCase()
// Sebuah string diubah menjadi huruf besar
let str3 = 'Full-Stack Developer';
let res3 = str3.toUpperCase();
console.log(res3); // Output "FULL-STACK DEVELOPER"



// 4. concat()
// Menggabungkan dua atau lebih string
let str4_1 = 'Web';
let str4_2 = 'Design';
let strlagi = "Program"
let res4 = str4_1.concat(' ', str4_2, ' ', strlagi);
console.log(res4); // Output "Web Design"



// 5. toExponential()
// Mengembalikan sebuah string, dengan angka dibulatkan dan ditulis menggunakan notasi eksponensial
let num1 = 3.14159265358979323846;
let resNum1 = num1.toExponential(5);
console.log(resNum1); // Output "3.14159e+0"



// 6. toString()
// Mengembalikan angka sebagai string
let num2 = 2002;
let resNum2 = num2.toString();
console.log(resNum2); // Output "2002"



// 7. toFixed()
// Mengembalikan string, dengan nomor yang ditulis dengan jumlah desimal tertentu
let num3 = 30.672;
let resNum3 = num3.toFixed(1);
console.log(resNum3); // Output "30.7"



// 8. join()
// Metode yang menggabungkan semua elemen array menjadi string dan dapat menentukan pemisah
let arr1 = ["Raden Maulana", 30, "Juni", 2002];
let resArr1 = arr1.join('-');
console.log(resArr1); // Output "Raden Maulana-30-Juni-2002"



// 9. pop()
// Metode yang menghapus elemen terakhir dari array
let arr2 = ["Soda", "Teh", "Kopi", "Susu"];
let resArr2 = arr2.pop();
console.log(arr2); // Output ["Soda", "Teh", "Kopi"]



// 10. splice()
// Parameter pertama menentukan posisi di mana elemen baru harus ditambahkan
// Parameter kedua menentukan berapa banyak elemen yang harus dihapus
// Parameter lainnya ("Lemon", "Kiwi") menentukan elemen baru yang akan ditambahkan.
// Metode splice() mengembalikan array dengan item yang dihapus/tidak
let arr3 = ["Soda", "Teh", "Kopi", "Susu"];
let resArr3 = arr3.splice(1, 0, "Kue Bolu", "Brownies");
console.log(arr3); // Output ["Soda", "Kue Bolu", "Brownies", "Teh", "Kopi", "Susu"]