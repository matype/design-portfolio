const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Did you check this npm-script in package.json? [Y/n]: ', (answer) => {
  rl.close();

  const normalized = answer.trim().toLowerCase();

  if (normalized === 'y' || normalized === '' ) {
    console.log('Yes');
    process.exit(0);
  } else {
    console.log('If you are using Node.js, npm-script allows arbitrary code execution. Be sure to check package.json first.');
    process.exit(1);
  }
});