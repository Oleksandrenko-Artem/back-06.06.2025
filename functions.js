const path = require('path');
const { readFileAsync } = require('./utils/readFile');
const { writeFileAsync, addFileAsync } = require('./utils/writeFile');
const { readDirAsync } = require('./utils/readDir');
const { createFolderAsync } = require('./utils/createFolder');
const { fileExists } = require('./utils/existsFile');

exports.getListFiles = async (dirName) => {
    try {
        const pathDir = path.resolve(dirName);
        const listFiles = await readDirAsync(pathDir);
        console.log(listFiles);
    } catch (error) {
        console.log("Error --->>> ", error);
    }
};

exports.createLogFileWithDate = async (dirName) => {
    try {
        // log yyyy-mm-ddThh:mm:ss.txt
        const date = new Date().toISOString().split('.').at(0);
        const dateFormat = date.replaceAll(':', '-')
        const pathFile = 'log_' + dateFormat + '.txt';
        const pathFileFull = path.resolve(dirName, pathFile);
        const dirFullPath = path.resolve(dirName);
        if (!(await fileExists(dirFullPath))) {
            await createFolderAsync(dirFullPath);
        }
        await writeFileAsync(pathFileFull, '');
    } catch (error) {
        console.log("Error --->>> ", error);
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
