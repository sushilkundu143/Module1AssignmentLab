const fs = require('fs')
const path = require('path')
const csv = require('csvtojson')

const inputPath = path.join(__dirname, 'customer-data.csv')
const outPath = path.join(__dirname, 'customer-data.json')

csv()
    .fromFile(inputPath)
    .then(jsonObj => { // onFulfilled
        console.log('data is geting converted')
        fs.writeFileSync(outPath, JSON.stringify(jsonObj))
    }, error => { // onRejected
        console.log(`error: ${error}`)
    })
   