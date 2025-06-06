const { readFileAsync } = require('./utils/readFile');
const { writeFileAsync } = require('./utils/writeFile');

const startWorkWithFile = async (pathFile) => {
    try {
        const content = await readFileAsync(pathFile);
        console.log(content);
    } catch (error) {
        console.log("Error --->>> ", error);
    }
};

startWorkWithFile('./content/test01.txt');
startWorkWithFile('./content/test02.txt');