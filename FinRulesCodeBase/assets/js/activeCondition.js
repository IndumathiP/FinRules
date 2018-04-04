sessionStorage.removeItem('key');
sessionStorage.clear();

(function () {
var len,a,i;
a=document.getElementsByClassName("mainMenu");
len=a.length;
for(i=0;i<len;i++) {
  a[i].classList.remove("activeMenu");

}
document.getElementById("data").classList.add("activeMenu");
}) ();