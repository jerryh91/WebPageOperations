var cellIndex;
var rowIndex;
var cells = document.getElementsByTagName("td");
var rows = document.getElementsByTagName("tr");
var opType;

function cellHelp(ev) {

  var cellTarget = ev.target;
  cellIndex = cellTarget.cellIndex;
  opFunc(this.cellIndex);
}

function opFunc(index) {
  //Traverse each row, 
  //For each row:
  //if cell in this row has cellIndex row value, 
  //perform ops.

  for (var i = 0; i < rows.length; i++) {
    //continue only if there's content 
    if (rows[i].cells[index] != undefined) {
      console.log("row: " + i + " col: " + index);
      console.log(rows[i].cells[index].textContent);
    }
  }
}

for (var i = 0; i < cells.length; i++) {

  cells[i].addEventListener("click", cellHelp);

}
