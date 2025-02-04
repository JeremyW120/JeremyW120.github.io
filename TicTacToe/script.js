let xTurn = true;

function changeMark(buttonId) {

    let currentMark = document.getElementById(buttonId).innerHTML;
    
    if (!currentMark) { if (xTurn) {
    
    document.getElementById(buttonId).innerHTML = "X";
    document.getElementById(buttonId).style.color = "goldenrod";
    // TODO: Set X color
    
    } else {
    
    document.getElementById(buttonId).innerHTML = "O";
    document.getElementById(buttonId).style.color = "red";
    // TODO: Set O color
    
    }
    
    xTurn = !xTurn; checkWin(); }
}

function resetGame() {

    document.getElementById("a1").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("a2").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c3").innerHTML = "";
    document.getElementById('result').innerHTML = "";
    xTurn = true;
    
    // TODO: Clear the remaining buttons
    
}

function checkWin() {
    let a1 = document.getElementById("a1").innerHTML; 
    let b1 = document.getElementById("b1").innerHTML; 
    let c1 = document.getElementById("c1").innerHTML; // TODO: Retrieve the marks from the remaining buttons
    let a2 = document.getElementById("a2").innerHTML; 
    let b2 = document.getElementById("b2").innerHTML; 
    let c2 = document.getElementById("c2").innerHTML;
    let a3 = document.getElementById("a3").innerHTML; 
    let b3 = document.getElementById("b3").innerHTML; 
    let c3 = document.getElementById("c3").innerHTML;

    if (a1 == b1 && b1 == c1) {
    // TODO: Inform the player that X wins on the page 
        if(a1 == "X")
        document.getElementById('result').innerHTML = "X wins.";
        if(a1 == "O")
            document.getElementById('result').innerHTML = "O wins.";
    }
    if (a2 == b2 && b2 == c2) {
        if(a2 == "X")
            document.getElementById('result').innerHTML = "X wins.";
        if(a2 == "O")
            document.getElementById('result').innerHTML = "O wins.";
    }
    if (a3 == b3 && b3 == c3) {
        if(a3 == "X")
            document.getElementById('result').innerHTML = "X wins.";
        if(a3 == "O")
            document.getElementById('result').innerHTML = "O wins.";
    }
    if (a1 == a2 && a2 == a3) {
        if(a1 == "X")
            document.getElementById('result').innerHTML = "X wins.";
        if(a1 == "O")
            document.getElementById('result').innerHTML = "O wins.";
    }
    if (b1 == b2 && b2 == b3) {
        if(b1 == "X")
            document.getElementById('result').innerHTML = "X wins.";
        if(b1 == "O")
            document.getElementById('result').innerHTML = "O wins.";
    }
    if (c1 == c2 && c2 == c3) {
        if(c1 == "X")
            document.getElementById('result').innerHTML = "X wins.";
        if(c1 == "O")
            document.getElementById('result').innerHTML = "O wins.";
    }
    if (a1 == b2 && b2 == c3) {
        if(a1 == "X")
            document.getElementById('result').innerHTML = "X wins.";
        if(a1 == "O")
            document.getElementById('result').innerHTML = "O wins.";
    }
    if (a3 == b2 && b2 == c1) {
        if(a3 == "X")
            document.getElementById('result').innerHTML = "X wins.";
        if(a3 == "O")
            document.getElementById('result').innerHTML = "O wins.";
    }
    // TODO: Complete the logic for the remaining win possibilities

}