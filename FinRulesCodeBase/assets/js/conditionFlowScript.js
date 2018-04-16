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


// select multiple checkbox

// function show() {
//   if(flag) {
//     document.getElementById('options').classList.add('inline-block');
//   }
//   else {
//     document.getElementById('options').classList.remove('inline-block');
//   }
//   flag = !flag;
// }

function display(e) {
  if(this.checked) {
    selected = [];
    checkboxes.forEach(checkbox => {
      if(checkbox.checked){
        selected.push(checkbox.name);
      }
    })
    // selected.push(e.target.name); 
    selectedValues.value = selected.join(', ');
    // document.getElementById('count').innerHTML = "(" + selected.length + ")";
  }
  else {
    selected = selected.filter(element => element!=e.target.name);
    selectedValues.value = selected.join(', ');
    // document.getElementById('count').innerHTML = "(" + selected.length + ")";
  }
}
function toSelectAll(e) {
  if(this.checked) {
    selected = [];
    checkboxes.forEach(checkbox => { 
      if(!checkbox.disabled) {
        checkbox.checked = true; selected.push(checkbox.name);
      }
    }); 
    selectedValues.value = "All Borrowers";
    // document.getElementById('count').innerHTML = "(" + selected.length + ")";
  }
  else {
    checkboxes.forEach(checkbox => checkbox.checked = false);
    selected = [];
    selectedValues.value = "";
    // document.getElementById('count').innerHTML = "(" + selected.length + ")";
  }
}

//get elements
var flag = true;
var selected = [];

document.getElementById('selectedValues').addEventListener('click', myFunction);
var selectedValues = document.getElementById('dropValue');

var checkboxes = document.querySelectorAll('.carName');
checkboxes.forEach(checkbox => checkbox.addEventListener('change',display));
var selectAll = document.getElementById('selectAll');
selectAll.addEventListener('change',toSelectAll);

function myFunction() {
  document.getElementById("options").classList.toggle("showDropdown");
}


window.onclick = function(event) {
  if(typeof event != "function"){
  if (!event.target.matches('.droptext')) {

    var dropdowns = document.getElementsByClassName("options");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('showDropdown')) {
        openDropdown.classList.remove('showDropdown');
      }
    }
  }
}
};

// active Menu
(function () {
var len,a,i;
a = document.getElementsByClassName("mainMenu");
len = a.length;
for(i=0;i<len;i++) {
  a[i].classList.remove("activeMenu");
}
document.getElementById("cond").classList.add("activeMenu");
}) ();