const os = require('os');
// console.log(os);

const user = os.userInfo();

// console.log(user);

// console.log(
//   `La durée de fonctionnement du système est ${os.uptime()} secondes`
// );

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem()
};
console.log(currentOS);
