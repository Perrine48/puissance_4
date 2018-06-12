/* Dropzone------------------------------------------------------------------*/

var drop = document.createElement('table');

for (var y = 0; y < 1; y++) {
    var dropLine = document.createElement('tr');
    drop.appendChild(dropLine);

    for (var z = 0; z < 7; z++) {
    var dropCol = document.createElement('td');
    dropLine.appendChild(dropCol);
    dropCol.setAttribute("class", "col");
    }
}
document.body.appendChild(drop);
drop.setAttribute("class", "dropzone");

var dropClick = document.getElementsByClassName('col');

for (var a = 0; a < drop.length; a++) {
    dropClick[a].addEventListener("click", index)
    function index() {
        return(console.log(a));
    }
}

/*Gamezone------------------------------------------------------------------ */
var array = document.createElement('table');

for (var i = 0; i < 6; i++) {
    var line = document.createElement('tr');
    array.appendChild(line);

    for (var x = 0; x < 7; x++) {
        var col = document.createElement('td');
        line.appendChild(col);
    }
}
document.body.appendChild(array);
array.setAttribute("class", "gamezone");
/*---------------------------------------------------------------------------*/



var line1 = [0,0,0,0,0,0];
var line2 = [0,0,0,0,0,0];
var line3 = [0,0,0,0,0,0];
var line4 = [0,0,0,0,0,0];
var line5 = [0,0,0,0,0,0];
var line6 = [0,0,0,0,0,0];
var line7 = [0,0,0,0,0,0];


var gamezone = [line1,line2,line3,line4,line5,line6,line7];


console.log(gamezone);
