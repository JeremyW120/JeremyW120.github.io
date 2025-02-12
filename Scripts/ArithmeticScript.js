let array = [];

function add(){
    let x = parseFloat(document.getElementById("input").value);
    if(isNaN(x) || x == null){
        alert("Not a number.");
    }
    else{
        array.push(x);      
    }
    document.getElementById("dataset").innerHTML = array.toString();

    mean();
}
function remove(){
    let x = parseFloat(document.getElementById("input").value);
    let y = array.indexOf(x);
    if(isNaN(x) || x == null){
        alert("Not a number");
    }
    else if(y > -1){
        array.splice(y, 1);
    }
    else{
        alert(x + " not found.");
    }

    document.getElementById("dataset").innerHTML = array.toString();

    mean();
}
function mean(){
    let l = array.length;
    let sum = 0.0;
    for(let i = 0; i < l; i++){
        sum = sum + array[i];
    }
    sum = sum / l;
    document.getElementById("mean").innerHTML = sum;
}