
function show(num){
    var x = document.getElementById('value').innerHTML;
    document.getElementById('value').innerHTML= x + num;
}
function calculate(){
    var output1 = document.getElementById('value').innerHTML;
    var output2 = eval(output1);
    document.getElementById('value').innerHTML = output2;
}
function backspace(){
    var output1 = document.getElementById('value').innerHTML;
    var output2 = output1.slice(0,-1);
    document.getElementById('value').innerHTML = output2;
}


function negative(){
    var output1 = document.getElementById('value').innerHTML;
    var output2 = -output1; 
    document.getElementById('value').innerHTML = output2;
}