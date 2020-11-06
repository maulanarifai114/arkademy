// Buatlah Algoritma, Flowchart dan Code untuk soal dibawah ini:

// Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0 (nol) dalam variabel tersebut merupakan pemisah antara
// satu bilangan dengan bilangan lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan berdasarkan angka di bilangan-bilangan itu
// sendiri. Setelah itu, bilangan hasil pengurutan akan digabung kembali dengan tanpa pemisah dengan output berupa bilangan integer. Buatlah
// method/function yang menerima parameter hanya deret angka dan menghasilkan output seperti keterangan di atas.

// Contoh Input :
// divideAndSort(5956560159466056)

// Contoh Output :
// 55566914566956

function divideAndSort(number) {
    if (typeof number === "number") {
        let processNum = number.toString().split('0') // ==> [ '595656', '159466', '56' ]
        let sortNum = processNum.map((e) => e.split('').sort().join('')).join('') // ==> "55566914566956"
        let changeNum = parseInt(sortNum) // ==> 55566914566956
        console.log(changeNum);
    } else {
        console.log('Masukan angka dengan benar');
    }
}

divideAndSort(5956560159466056)