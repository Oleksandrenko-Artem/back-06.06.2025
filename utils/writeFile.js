const { writeFile } = require('fs/promises');

exports.writeFile = async (pathFile) => {
    try {
        await writeFile(pathFile, 'new text');
    } catch (error) {
        console.log("Error --->>> ", error);
    }
};
