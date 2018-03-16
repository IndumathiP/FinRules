var listOfOptions = document.getElementById("options"),
  duFindings = document.getElementById("duFindings"),
  notes = document.getElementById("notes"),
  counter = 0;

document.getElementById("viewDu").addEventListener("click", showDu);
//document.getElementById("hideDu").addEventListener("click", hideDu);
document.getElementById("viewNotes").addEventListener("click", showNotes);
// document.getElementById("hideNotes").addEventListener("click", hideNotes);
window.addEventListener("click",hideMenu);

function hideMenu(e) {
  console.log(e.target);
  // if(e.target != document.getElementById("viewDu")){
  //   hideDu();
  // }
  // else if(e.target != document.getElementById("viewNotes")){
  //   hideNotes();
  // }
  // else if()
}

function display(ele, res) {
  if (res) {
    ele.classList.remove("displayNone");
  } else {
    ele.classList.add("displayNone");
  }
}
display(duFindings, false);
display(notes, false);

function showOverlay() {
  document.getElementById("duFindingsWrapper").classList.add("duFindingsWrapper");
}

function hideOverlay() {
  document.getElementById("duFindingsWrapper").classList.remove("duFindingsWrapper");
}

function showDu() {
  showOverlay();
  display(listOfOptions, false);
  display(duFindings, true);
}

function showNotes() {
  showOverlay();
  display(listOfOptions, false);
  display(notes, true);
}

function hideDu() {
  hideOverlay();
  display(listOfOptions, true);
  display(duFindings, false);
}

function hideNotes() {
  hideOverlay();
  display(listOfOptions, true);
  display(notes, false);
}

function toggleactive(){
  document.getElementById("active").classList.remove("btn-active");
  document.getElementById("active").classList.add("btn-inactive");
  document.getElementById("inactive").classList.remove("btn-inactive");
  document.getElementById("inactive").classList.add("btn-active");
}

function toggleinactive(){
  document.getElementById("inactive").classList.remove("btn-active");
  document.getElementById("inactive").classList.add("btn-inactive");
  document.getElementById("active").classList.remove("btn-inactive");
  document.getElementById("active").classList.add("btn-active");
}

function addIcon(){
 counter +=1;
 positionIcon(counter);
}

function positionIcon(counter){
  if(counter%2 == 0){
    document.getElementById("bottomIcon").classList.remove("addIconBottom");
    document.getElementById("bottomIcon").classList.add("addIconMiddle");
  }
  else{
    document.getElementById("bottomIcon").classList.remove("addIconMiddle");
    document.getElementById("bottomIcon").classList.add("addIconBottom");
  }
}
// function enabledCheckbox(event) {
//   var check = window.event.currentTarget.checked;
//   var parent = window.event.currentTarget.parentElement.parentElement;
//   if (check) {
//     parent.style.border = "2px solid #4CAB9C";
//   } else {
//     parent.style.borderWidth = "0 0 3px 0";
//     parent.style.borderStyle = "solid";
//     parent.style.borderColor = "transparent transparent #FECD62 transparent";
//   }

// }