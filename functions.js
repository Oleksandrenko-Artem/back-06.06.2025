const path = require('path');
const { readFileAsync } = require('./utils/readFile');
const { writeFileAsync, addFileAsync } = require('./utils/writeFile');

exports.createLogFileWithDate = async (dirName) => {
    try {
        // log yyyy-mm-ddThh:mm:ss.txt
        const date = new Date().toISOString().split('.').at(0);
        const dateFormat = date.replaceAll(':', '-')
        const pathFile = 'log_' + dateFormat + '.txt';
        const pathFileFull = path.resolve(dirName, pathFile);
        await writeFileAsync(pathFileFull, '');
    } catch (error) {
        console.log(error);
    }
};

exports.startWorkWithFile = async (pathFile, newText) => {
    try {
        await addFileAsync(pathFile, newText);
        const content = await readFileAsync(pathFile, newText);
        console.log(content);
    } catch (error) {
        console.log("Error --->>> ", error);
    }
};
