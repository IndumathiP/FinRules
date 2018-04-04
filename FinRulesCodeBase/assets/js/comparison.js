var n, data, counter = 1,
  count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function displayDuLp(m) {
  n = m;
  sessionStorage.setItem('key', n);
}

(function () {
  data = sessionStorage.getItem('key');
  if (data == 1) {
    document.getElementsByClassName("verification")[0].classList.remove("none");
    document.getElementsByClassName("navigationWrapper")[0].classList.remove("none");
    document.getElementsByClassName("lpFindings")[0].classList.add("none");
  } 
  else if (data == 2) {
    document.getElementsByClassName("lpFindings")[0].classList.remove("none");
    document.getElementsByClassName("verification")[0].classList.add("none");
    document.getElementsByClassName("navigationWrapper")[0].classList.add("none");
  } 
  else if (data == 3) {
    document.getElementById("headerContent").classList.add("subHeaderDisplay");
  } 
  else if (data == 4) {
    document.getElementById("headerContent").classList.add("subHeader");
  } 
  else if (data == 5) {
    document.getElementById("successMessage").classList.add("displaysuccess");
    document.getElementById("tipIncome").classList.add("displaysuccess");
  } 
})();

function rotate(event) {
  if (counter & 1) {
    document.getElementsByClassName("downIcon")[0].style.transform = "rotate(180deg)";
    window.event.currentTarget.style.top = "0";
    window.event.currentTarget.style.bottom = "";
    window.event.currentTarget.style.transition = "top 1s ease-in";
    document.getElementsByClassName("reasonForNotEligible")[0].style.display = "block";
    window.event.currentTarget.previousElementSibling.style.opacity = "0";
    counter = counter + 1;
  } else {
    document.getElementsByClassName("downIcon")[0].style.transform = "rotate(0deg)";
    counter = counter + 1;
    window.event.currentTarget.style.bottom = "0";
    window.event.currentTarget.style.top = "";
    document.getElementsByClassName("reasonForNotEligible")[0].style.display = "none";
    window.event.currentTarget.previousElementSibling.style.opacity = "1";
  }

}
(function () {
  var len,a,i;
  a=document.getElementsByClassName("mainMenu");
  len=a.length;
  for(i=0;i<len;i++) {
    a[i].classList.remove("activeMenu");
  
  }
  document.getElementById("aus").classList.add("activeMenu");
  }) ();