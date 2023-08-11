const { write } = require("fs");

let connection; // stores the active TCP connection

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", (key) => handleUserInput(key));// event listener 
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log('exiting...');
    process.exit();
  }
  if (key === 'w') {
    console.log("Moved up");
    connection.write('Move: up');
  }
  if (key === 'a') {
    console.log("Moved left");
    connection.write('Move: left');
  }
  if (key === 's') {
    console.log("Moved down");
    connection.write('Move: down');
  }
  if (key === 'd') {
    console.log("Moved right");
    connection.write('Move: right');
  }
  if (key === '1') {
    connection.write("Say: 🍴");
  }
  if (key === '2') {
    connection.write("Say: so hungry 😋");
  }
  if (key === '3') {
    connection.write("Say: 🍎🍏🍎  Keep those comming❗❗❗");
  }
};

module.exports = { setupInput };