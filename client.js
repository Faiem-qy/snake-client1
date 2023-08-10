const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",// IP address here
    port: 50541, // Port number here
  });

  //using conn obj tp handle messages from the server
  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting...");
connect();
module.exports = {connect}