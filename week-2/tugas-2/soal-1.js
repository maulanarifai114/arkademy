const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
            let cek = dataDay.find((item) => {
                return item === day
            })
            if (cek) {
                resolve(cek)
            } else {
                reject(new Error('Hari ini bukan hari kerja'))
            }
        }, 3000)
    })
}

// cekHariKerja('minggu')
//     .then((resolve) => console.log(resolve))
//     .catch((reject) => console.log(reject));
/* 
    Penggunaan then and catch untuk Promise
*/

async function cekDay(hari) {
    try {
        const display = await cekHariKerja(hari)
        console.log(display);
    } catch (err) {
        console.log(err);
    }
}
cekDay('selasa')
/* 
    Penggunaan try dan catch harus dimasukan ke dalam async function
*/