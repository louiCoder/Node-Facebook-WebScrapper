const fs = require('fs');

function* writeToTextFile() {
    fs.writeFile('Output.txt', data, (err) => {

        // In case of a error throw err. 
        if (err) throw err;
    })
}

function readFromTextFile() {
    
}

module.exports = { writeToTextFile, readFromTextFile }