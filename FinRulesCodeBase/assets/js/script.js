var listOfOptions = document.getElementById("options"),
duFindings = document.getElementById("duFindings"),
notes = document.getElementById("notes");

document.getElementById("viewDu").addEventListener("click", showDu);
document.getElementById("hideDu").addEventListener("click", hideDu);
document.getElementById("viewNotes").addEventListener("click", showNotes);
document.getElementById("hideNotes").addEventListener("click", hideNotes);

function display(ele, res) {
if (res) {
  ele.style.display = "block";
}
else {
  ele.style.display = "none";
}
}
display(duFindings, false);
display(notes, false);

function showDu() {
display(listOfOptions, false);
display(duFindings, true);
}

function showNotes() {
display(listOfOptions, false);
display(notes, true);
}

function hideDu() {
display(listOfOptions, true);
display(duFindings, false);
}

function hideNotes() {
display(listOfOptions, true);
display(notes, false);
}
function enabledCheckbox(event) {
var check = window.event.currentTarget.checked;
var parent = window.event.currentTarget.parentElement.parentElement;
if (check) {
  parent.style.border = "2px solid #4CAB9C";
}
else {
  parent.style.borderWidth = "0 0 3px 0";
  parent.style.borderStyle = "solid";
  parent.style.borderColor = "transparent transparent #FECD62 transparent";
}

}