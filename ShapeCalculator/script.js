function Perimeter(){
    let x = parseInt(document.getElementById('PHeight').value);
    let y = parseInt(document.getElementById('PWidth').value);
    let z = parseInt(document.getElementById('PLength').value);
    let result = x + y + z;
    document.getElementById('perimeterResult').innerHTML = result;
}
function Area(){
    let x = document.getElementById('AHeight').value;
    let y = document.getElementById('AWidth').value;
    let result = (1/2) * x * y;
    document.getElementById('areaResult').innerHTML = result;
}
function Volume(){
    let x = document.getElementById('VHeight').value;
    let y = document.getElementById('VWidth').value;
    let z = document.getElementById('Length').value;
    let result = (1/3) * x * y * z;
    document.getElementById('volumeResult').innerHTML = result;
}