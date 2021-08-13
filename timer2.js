const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
stdin.on('data', key => {
  if (key === '\u0062') { // beep right away when users press b
    process.stdout.write('\x07');
  } else if (number.includes(Number(key))) {
    process.stdout.write(`setting timer for ${Number(key)} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key) * 1000);
  } else if (key === '\u0003') { // exit the program when users use ctrl + c
    process.stdout.write('Thanks for using me, ciao!\n')
    process.exit();
  }
});