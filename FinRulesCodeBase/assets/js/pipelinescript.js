var counter = { one:0, two:0};

function addIcon(e) {
  for(var i in counter){
    
  }
  counter += 1;
  positionIcon(counter);
}

// function positionIcon(counter) {
//   if (counter % 2 == 0) {
//     document.getElementById("rotateArrow").style.transform = "rotate(0deg)";
//     document.getElementsByClassName("recordInformation")[0].style.border = "0";
//   } else {
//     document.getElementById("rotateArrow").style.transform = "rotate(180deg)";
//     document.getElementsByClassName("recordInformation")[0].style.border = "1px solid #E7E7E7";
//   }
// }