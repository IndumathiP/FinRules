var n,data;
function displayDuLp(m){
 n=m;
 sessionStorage.setItem('key',n);
}
(function () {
  data = sessionStorage.getItem('key');
  //sessionStorage.removeItem('key');
  //sessionStorage.clear();
  if (data==1)
  {
    document.getElementsByClassName("verification")[0].classList.remove("none");
    document.getElementsByClassName("navigationWrapper")[0].classList.remove("none");
    document.getElementsByClassName("lpFindings")[0].classList.add("none"); 
  //  document.getElementsByClassName("footer")[0].classList.remove("bottom");
  }
  else if (data==2) {
    document.getElementsByClassName("lpFindings")[0].classList.remove("none"); 
    document.getElementsByClassName("verification")[0].classList.add("none");
    document.getElementsByClassName("navigationWrapper")[0].classList.add("none");
  //  document.getElementsByClassName("footer")[0].classList.add("bottom");
  }
  
  
})();