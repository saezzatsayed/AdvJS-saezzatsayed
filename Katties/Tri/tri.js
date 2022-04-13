//Problem ID : 8770562


const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  var fnum, snum, tnum;
  var values = [];
  var division = false;
  var multiply = false;
  var add = false;
  var subtract = false;
  var result = " ";


  readline.question('\n', nums => {

    values = nums.split(' ').map(Number);
    readline.close()
    fnum = values[0];
    snum = values[1];
    tnum = values[2];
    testing(fnum,snum,tnum);
    readline.close;
  })
  
  function testing (fnum,snum,tnum){
  
    if (fnum / snum == tnum || snum / tnum == fnum)
        division = true;
    else if (fnum * snum == tnum || snum * tnum == fnum)
        multiply = true;
    else if (fnum + snum == tnum || snum + tnum == fnum)
        add = true;
    else if (fnum - snum == tnum || snum - tnum == fnum)
        subtract = true;
    if (add == true)
        {
            if (fnum + snum == tnum){
                console.log(fnum + "+" + snum + "=" + tnum)
                result = fnum + "+" + snum + "=" + tnum;
            }
            else{
                console.log(fnum + "=" + snum + "+" + tnum)
                result = fnum + "+" + snum + "=" + tnum;
            }
    }

    else if (division == true)
        {
            if (fnum / snum == tnum){
                console.log(fnum + "/" + snum + "=" + tnum)
                result = fnum + "/" + snum + "=" + tnum;
            }
            else{
                console.log(fnum + "=" + snum + "/" + tnum)
                result = fnum + "=" + snum + "/" + tnum;
            }   
        } 
    else if (multiply == true)
        {
            if (fnum * snum == tnum){
                console.log(fnum + "*" + snum + "=" + tnum)
                result = fnum + "*" + snum + "=" + tnum;
            }
            else{
                console.log(fnum + "=" + snum + "*" + tnum)
                result = fnum + "=" + snum + "*" + tnum;
            } 
        }   
    else if(subtract == true)
        {
            if (fnum - snum == tnum){
                console.log(fnum + "-" + snum + "=" + tnum)
                result = fnum + "-" + snum + "=" + tnum;
            }
            else{
                console.log(fnum + "=" + snum + "-" + tnum)
                result = fnum + "=" + snum + "-" + tnum;
            } 
            }

    return result;
}

module.exports = testing;


  
