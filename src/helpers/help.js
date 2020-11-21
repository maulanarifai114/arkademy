module.exports = {
    response: (res, result, status, err) => {
        const resultPrint = {}
        resultPrint.status = 'success'
        resultPrint.statusCode = status
        resultPrint.result = result
        resultPrint.err = err || null
        res.status(status)
        res.json(resultPrint)
    },
    reject: (res, result, status, err) => {
        const resultPrint = {}
        resultPrint.status = 'failed'
        resultPrint.statusCode = status
        resultPrint.result = result
        resultPrint.err = err || null
        res.status(status)
        res.json(resultPrint)
    }
}