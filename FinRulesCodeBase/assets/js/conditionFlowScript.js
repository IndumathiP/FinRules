var count = 0;
function rotate(event) {
  //window.event.currentTarget.children[0].classList.add("rotate");
  if(count&1)
  {
      window.event.currentTarget.children[0].style.transform="rotate(0deg)";
      
  }
  else {
      window.event.currentTarget.children[0].style.transform="rotate(180deg)";
  }
  count=count+1;
}

function showcondition(){
  if(document.getElementById("category").value == "Tip Income"){
    document.getElementById("selectCategory").classList.add("showflow");
    document.getElementById("showtask").classList.add("showflow");
  }
}

(function () {
var len,a,i;
a=document.getElementsByClassName("mainMenu");
len=a.length;
for(i=0;i<len;i++) {
  a[i].classList.remove("activeMenu");

}
document.getElementById("cond").classList.add("activeMenu");
}) ();