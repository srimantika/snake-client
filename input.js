

const UPKEY = "Move: up";
const LEFTKEY = "Move: left";
const DOWNKEY = "Move: down";
const RIGHTKEY = "Move: right";


let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) => {
  const stdout = process.stdout;
  const interval = function(key) {
    setTimeout(() => {
      connection.write(key);
    }, 1000);
  };
  if (key === '\u0003') {
    stdout.write("Exited snake game.\n");
    process.exit();
  }
  if (key === 'w') {
   
    interval(UPKEY);
  //  console.log("pressed up key")
  }
  if (key === 'a') {
   
    interval(LEFTKEY);
  //  console.log("pressed left key")
  }
  if (key === 's') {
    
    interval(DOWNKEY);
  //  console.log("pressed down key")
  }
  if (key === 'd') {
    
    interval(RIGHTKEY);
  //  console.log("pressed right key")
  }
  if (key === "h") {
    connection.write("Say: Hello");
  }

};


module.exports = { setupInput };