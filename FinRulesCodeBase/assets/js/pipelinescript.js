var counter = 0;
// document.getElementById("list").addEventListener("click",addIcon);
function addIcon(event) {
  var counter;
  counter=window.event.currentTarget.getAttribute("counter");

  
  if(counter=="0")
  {
      window.event.currentTarget.children[0].style.transform="rotate(180deg)";
      window.event.currentTarget.setAttribute("counter","1");
      window.event.currentTarget.parentNode.parentNode.parentNode.style.border = "1px solid #E7E7E7";
  }
  else {
      window.event.currentTarget.children[0].style.transform="rotate(0deg)";
      window.event.currentTarget.setAttribute("counter","0");
      window.event.currentTarget.parentNode.parentNode.parentNode.style.border = "1px solid transparent";
  }
}

document.getElementById("showFilters").addEventListener("click", showFilters);

function display(ele, res) {
  if (res) {
    ele.classList.remove("displayNone");
  } else {
    ele.classList.add("displayNone");
  }
}

function showFilters() {
  document.getElementById("filter").classList.add("showFilters");
  showOverlay();
}
function hideFilters() {
  document.getElementById("filter").classList.remove("showFilters");
  hideOverlay();
}
function showOverlay() {
  document.getElementById("duFindingsWrapper").classList.add("duFindingsWrapper");
}

function hideOverlay() {
  document.getElementById("duFindingsWrapper").classList.remove("duFindingsWrapper");
}

window.addEventListener("click",hideMenu);

function hideMenu(e) {
  console.log(e.target);
  if(e.target ==  document.getElementById("duFindingsWrapper")){
    hideFilters();    
  }
}
 sessionStorage.removeItem('key');
  sessionStorage.clear();