const fs = require("fs");

const getStringSizeInBytesNode = (str) => {
  return Buffer.byteLength(str, "utf8") ;
};

function readFileWithErrorHandling(filename, callback) {
  fs.readFile(filename, "utf-8", (err, data) => {
    if (err) {
      callback("File not found: " + filename);
      return;
    }
    let byteSize = getStringSizeInBytesNode(data);
    callback("File read successfully. Size: " + byteSize);
  });
}

const filePath = getCurrentPath();

readFileWithErrorHandling(filePath, (result) => {
  console.log(result);
  // Success: "File read successfully. Size: 150 bytes"
  // Or error: "File not found: existing.txt"
});

function getCurrentPath() {
    const path = require('path');
    const filePath = path.join(__dirname, 'existing.txt');
    return filePath;
}

