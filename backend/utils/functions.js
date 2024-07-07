const fs = require("fs");

function writeDataToFile(data, filePath, db = "posts") {
    const fileData = readDataFromFile(filePath);
    fileData[db] = data;
    const jsonData = JSON.stringify(fileData, null, 2);
    fs.writeFileSync(filePath, jsonData);
}

function readDataFromFile(filePath) {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
}


module.exports = {writeDataToFile, readDataFromFile};
