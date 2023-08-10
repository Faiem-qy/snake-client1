const net = require("net");

// establish a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",// IP address here
    port: 50541, // Port number here
  });

  conn.on("data", () => {
    console.log("you ded cuz you idled");
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting...");
connect();