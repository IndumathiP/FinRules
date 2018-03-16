var listOfOptions = document.getElementById("options"),
  duFindings = document.getElementById("duFindings"),
  notes = document.getElementById("notes"),
  counter = 0,
  childCount;

document.getElementById("viewDu").addEventListener("click", showDu);
document.getElementById("viewNotes").addEventListener("click", showNotes);
window.addEventListener("click",hideMenu);
var ElehideDu = document.getElementsByClassName("hideDu")
var EleNotesDu = document.getElementsByClassName("hideNotes")

for(var i=0;i<ElehideDu.length;i++)
  ElehideDu[i].addEventListener("click",hideDu);


for(var i=0;i<EleNotesDu.length;i++)
  EleNotesDu[i].addEventListener("click",hideNotes);

function hideMenu(e) {
  console.log(e.target);
  // if(e.target !=  document.getElementById("viewDu")) || e.target.parentNode == duFindings{
  if(e.target ==  document.getElementById("duFindingsWrapper")){
    hideDu();
    hideNotes();
    display(document.getElementById("pop-up"),false);
    display(document.getElementById("pop-up2"),false);
    display(document.getElementById("pop-up3"),false);
    // document.getElementById("duFindingsWrapper").addEventListener("hide-overlay");
  }
}
function showPopup(){
  display(document.getElementById("pop-up"),true);
  showOverlay();
}
function showPopup2(){
  display(document.getElementById("pop-up2"),true);
  showOverlay();
}
function showPopup3(){
  display(document.getElementById("pop-up3"),true);
  showOverlay();
}
function display(ele, res) {
  if (res) {
    ele.classList.remove("displayNone");
  } else {
    ele.classList.add("displayNone");
  }
}
// display(duFindings, false);
display(document.getElementById("pop-up"),false);
display(document.getElementById("pop-up2"),false);
display(document.getElementById("pop-up3"),false);

function showOverlay() {
  document.getElementById("duFindingsWrapper").classList.add("duFindingsWrapper");
}

function hideOverlay() {
  document.getElementById("duFindingsWrapper").classList.remove("duFindingsWrapper");
}

function showDu() {
  display(listOfOptions, false);
  duFindings.classList.add("showMenu");
  showOverlay();
}

function showNotes() {
  display(listOfOptions, false);
  notes.classList.add("showMenu");
  showOverlay();
}

function hideDu() {
  display(listOfOptions, true);
  duFindings.classList.remove("showMenu");
  hideOverlay();
}

function hideNotes() {
  display(listOfOptions, true);
  notes.classList.remove("showMenu");
  hideOverlay();
  // display(notes, false);
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