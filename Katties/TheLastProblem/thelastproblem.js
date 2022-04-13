const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
  
var Fname = " ";

rl.question('\n', line =>{
    Fname = line;
    console.log("Thank you, " + Fname + ", and farewell!")
    rl.close;
  }
  );
function testing(Fname){
    return'Thank you, ' + Fname + ', and farewell!'
}

module.exports = testing;