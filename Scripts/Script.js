/*

.pageBody {
  
}

*/
function defaultMode(){
    document.getElementById('pageBody').style.backgroundColor = "#000064";    
    document.getElementById('pageBody').style.color = "white";
    document.getElementById('header').style.backgroundColor= "white";
    document.getElementById('header').style.color= "goldenrod";
    document.getElementById('header2').style.backgroundColor= "white";
    document.getElementById('header2').style.color= "goldenrod";
}
function lightMode(){    
    document.getElementById('pageBody').style.backgroundColor = "#ffffff";    
    document.getElementById('pageBody').style.color = "black";
    document.getElementById('header').style.backgroundColor= "grey";
    document.getElementById('header').style.color= "black";
    document.getElementById('header2').style.backgroundColor= "grey";
    document.getElementById('header2').style.color= "black";
}
function darkMode(){
    document.getElementById('pageBody').style.backgroundColor = "#000000";
    document.getElementById('pageBody').style.color="white";
    document.getElementById('header').style.backgroundColor = "#5b5b5b";
    document.getElementById('header').style.color= "white";
    document.getElementById('header2').style.backgroundColor = "#5b5b5b";
    document.getElementById('header2').style.color= "white";
}