//Problem Id: 8770557

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
  
var Fname = " ";

rl.question('\n', line1 =>{
    Fname = line1;
    console.log("Thank you, " + Fname + ", and farewell!")
    rl.close;
  }
  );
