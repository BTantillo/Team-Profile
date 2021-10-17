const inquirer = require("inquirer");

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there's an error, reject the promise and send error to .catch
            if (err) {
                reject(err);
                return;
            }
            // if everything went well, relsove promise and send data to .then
            resolve ({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

module.exports = writeFile