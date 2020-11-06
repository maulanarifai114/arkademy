// Program Pertama
const cekIsiKulkas = (isi) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let isiKulkas = ['ayam', 'kangkung', 'sapi', 'bayam', 'tomat']
            let cek = isiKulkas.find((item) => {
                return item === isi
            })
            if (cek) {
                resolve(`${isi} ada di kulkas`)
            } else {
                reject(new Error(`${isi} tidak ada dalam kulkas, segera membeli`))
            }
        }, 1000)
    })
}
const cekIsi = cekIsiKulkas('sayur kol');
cekIsi
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject));



// Program Kedua
const cekDompetDigital = (isi) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // if (isi < 100000) {
            reject(`Jumlah uang kamu Rp. ${isi}, jangan boros-boros ya`)
            resolve(`Jumlah uang kamu Rp. ${isi}, ayo menabung lebih banyak lagi`)
            // } else {
            // }
        }, 1000)
    })
}

async function cekDompet(jml) {
    try {
        const display = await cekDompetDigital(jml)
        console.log(display);
    } catch (err) {
        console.log(err);
    }
}

cekDompet(120000)