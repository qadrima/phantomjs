const { exec } = require('child_process');

var execExample = './phantomjs src/example.js';

exec(execExample, (err, stdout, stderr) => {
    if (err) {
        console.log(`ERROR: ${err}`);
        return;
    }
  
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});