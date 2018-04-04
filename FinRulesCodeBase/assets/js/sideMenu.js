function showOverlay() {
  document.getElementById("duFindingsWrapper").classList.add("duFindingsWrapper");
}

function hideOverlay() {
  document.getElementById("duFindingsWrapper").classList.remove("duFindingsWrapper");
}

function showsideMenu(){
  showOverlay();
  document.getElementById("sideMenu").classList.add("showsideMenu");
}

function hideSideMenu(){
  hideOverlay();
  document.getElementById("sideMenu").classList.remove("showsideMenu");
}

window.addEventListener("click",hideMenu);

function hideMenu(e) {
  if(e.target ==  document.getElementById("duFindingsWrapper")){
    hideSideMenu();
  }
}