const { readFile } = require('fs/promises');

// console.log(fs);
async function readFileAsync(pathFile) {
    try {
        return await readFile(pathFile, 'utf8'); // Promises.fullfild(data)
        // console.log("Data --->>> ", data);
    } catch (error) {
        console.log("Error --->>> ", error);
    }
}

module.exports = {readFileAsync};