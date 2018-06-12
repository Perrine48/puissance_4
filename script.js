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

var dropClick = Array.from(document.getElementsByClassName('col'));


for (var a = 0; a < dropClick.length; a++) {
    dropClick[a].addEventListener("click", index)
    function index() {
        var indexCol = dropClick.indexOf(this);
        var column = document.getElementsByClassName('gameCase'+indexCol)
        for (var j = 0; j < column.length; j++) {

            if (column[5].style.backgroundColor != "white"){
                column[5].style.backgroundColor = "red"
            }
            else if (column[4].style.backgroundColor != "white"){
                column[4].style.backgroundColor = "red"
            }
            else if (column[3].style.backgroundColor != "white"){
                column[3].style.backgroundColor = "red"
            }
            else if (column[2].style.backgroundColor != "white"){
                column[2].style.backgroundColor = "red"
            }
            else if (column[1].style.backgroundColor != "white"){
                column[1].style.backgroundColor = "red"
            }
            else if (column[0].style.backgroundColor != "white"){
                column[0].style.backgroundColor = "red"
            }
            console.log(column);
        }
    }
}

/*Gamezone------------------------------------------------------------------ */
var array = document.createElement('table');
var line = [];

for (var i = 0; i < 6; i++) {
    line[i] = document.createElement('tr');
    array.appendChild(line[i]);
    line[i].setAttribute("class", "gameLine")

    for (var x = 0; x < 7; x++) {
        line[i][x] = document.createElement('td');
        line[i].appendChild(line[i][x]);
        line[i][x].setAttribute("class", "gameCase"+x)
    }
}

document.body.appendChild(array);
array.setAttribute("class", "gamezone");

var gameFull = Array.from(document.getElementsByClassName('gameCase'));
var gameLines = Array.from(document.getElementsByClassName('gameLine'))


/*---------------------------------------------------------------------------*/



// var line1 = [0,0,0,0,0,0];
// var line2 = [0,0,0,0,0,0];
// var line3 = [0,0,0,0,0,0];
// var line4 = [0,0,0,0,0,0];
// var line5 = [0,0,0,0,0,0];
// var line6 = [0,0,0,0,0,0];
// var line7 = [0,0,0,0,0,0];
//
//
// var gamezone = [line1,line2,line3,line4,line5,line6,line7];
//
//
// console.log(gamezone);
