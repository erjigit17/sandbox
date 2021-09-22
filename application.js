'use strict';

const fs = require('fs');
const net = require('net');

console.log('From application global context');
console.dir({ fs, net }, { depth: 1 });
console.dir({ global }, { depth: 1 });
console.dir({ api }, { depth: 2 });

module.exports = () => {
  console.log('From application exported function');
};``