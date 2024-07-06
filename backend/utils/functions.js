const fs = require("fs");

function writeDataToFile(data, filePath) {
    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFileSync(filePath, jsonData);
}

function readDataFromFile(filePath) {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
}


module.exports = {writeDataToFile, readDataFromFile};
