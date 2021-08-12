const args = process.argv.slice(2);

const timer = function(arr) {
  if (arr.length === 0) {
    return;
  }
  for (let second of arr) {
    if (typeof(Number(second)) === 'number' && Number(second) >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log(`Beep after ${Number(second)} seconds!`);
      }, Number(second) * 1000);
    }
  }
};

timer(args);