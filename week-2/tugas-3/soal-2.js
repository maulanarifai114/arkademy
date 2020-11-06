// Reverse Words
// Diberikan sebuah kalimat, ubah urutan kata-kata di dalam kalimat menjadi terbalik.
// Misalnya kalimat "Saya belajar Javascript", output "Javascript belajar Saya"

let kalimat = 'Saya Belajar Javascript';
let arrKalimat = kalimat.split(' ');

function reverseArray(arr) {
    let newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return console.log(newArray.join(''));
}

reverseArray(arrKalimat)