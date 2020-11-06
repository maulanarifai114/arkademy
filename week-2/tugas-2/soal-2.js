const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'March', 'April', 'May', 'Juny', 'July', 'August', 'September', 'October', 'November', 'December']
        if (!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data Not Found', []))
        }
    }, 4000);
}

function displayAllMonth(err, allMonth) {
    if (err !== null) {
        console.log(err.message);
        return
    }

    allMonth.map(e => console.log(e))
}

getMonth(displayAllMonth);