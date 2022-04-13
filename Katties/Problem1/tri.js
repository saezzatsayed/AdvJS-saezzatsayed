//Problem ID : 8770562

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question('\n', nums => {
    var values = nums.split(' ').map(Number);
    
    var fnum = values[0];
    var snum = values[1];
    var tnum = values[2]
    
    var division = false;
    var multiply = false;
    var add = false;
    var subtract = false

    if (fnum / snum == tnum || snum / tnum == fnum)
        division = true;
    else if (fnum * snum == tnum || snum * tnum == fnum)
        multiply = true;
    else if (fnum + snum == tnum || snum + tnum == fnum)
        add = true;
    else if (fnum - snum == tnum || snum - tnum == fnum)
        subtract = true;
    

    if (add)
        console.log(fnum + snum == tnum ? fnum + "+" + snum + "=" + tnum : fnum + "=" + snum + "+" + tnum)
    else if (division)
        console.log(fnum / snum == tnum ? fnum + "/" + snum + "=" + tnum : fnum + "=" + snum + "/" + tnum)
    else if (multiply)
        console.log(fnum * snum == tnum ? fnum + "*" + snum + "=" + tnum : fnum + "=" + snum + "*" + tnum)
    else if(subtract)
        console.log(fnum - snum == tnum ? fnum + "-" + snum + "=" + tnum : fnum + "=" + snum + "-" + tnum)
    readline.close()
  })