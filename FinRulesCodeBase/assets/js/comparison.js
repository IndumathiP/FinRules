var n, data, counter = 1;
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
})();
function rotate() {
  if (counter & 1) {
    document.getElementsByClassName("downIcon")[0].style.transform = "rotate(180deg)";
    counter = counter + 1;
  }
  else {
    document.getElementsByClassName("downIcon")[0].style.transform = "rotate(0deg)";
    counter = counter + 1;
  }

}