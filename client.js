const net = require("net");

const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,// IP address here
    port: PORT, // Port number here
  });

  conn.on("connect", () => {// log messages when connected
    console.log("Successfully connected to the game server");
    console.log("Name:FQY");
    // setInterval(() => {
    //   // conn.write('Move: up');
    // }, 100);
  });


  //using conn obj tp handle messages from the server
  conn.on("data", (data) => {
    console.log("you ded cuz you idled", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connect };