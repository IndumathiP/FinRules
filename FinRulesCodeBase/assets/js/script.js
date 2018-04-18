var listOfOptions = document.getElementById("options"),
  duFindings = document.getElementById("duFindings"),
  notes = document.getElementById("notes"),
  restorecondition=document.getElementById("restorecondition"),
  incomedescriptionwrap=document.getElementById("incomedescription-wrap"),
  showSuspendedContent=document.getElementById("showSuspendedContent"),
  suspendedarrow=document.getElementById("suspendedarrow"),
  suspropdescriptionwrap=document.getElementById("suspropdescription-wrap"),
  counter = 0,cnt=0,
  childCount,
  suspendclickcount=0,activeConditionHead;
if(document.getElementById("viewDu")){
document.getElementById("viewDu").addEventListener("click", showDu);
}
document.getElementById("viewNotes").addEventListener("click", showNotes);
document.getElementById("viewCondition").addEventListener("click", showCondition);
window.addEventListener("click",hideMenu);
var ElehideDu = document.getElementsByClassName("hideDu");
var EleNotesDu = document.getElementsByClassName("hideNotes");
var EleLoan = document.getElementsByClassName("hideloan");

// for(var i=0;i<ElehideDu.length;i++);
  ElehideDu[0].addEventListener("click",hideDu);
  ElehideDu[1].addEventListener("click",hideDu);

for(var i=0;i<EleNotesDu.length;i++)
  EleNotesDu[i].addEventListener("click",hideNotes);

for(var i=0;i<EleLoan.length;i++)
  EleLoan[i].addEventListener("click",hideLoan);

function hideMenu(e) {
  // console.log(e.target);
  // if(e.target !=  document.getElementById("viewDu")) || e.target.parentNode == duFindings{
  if(e.target ==  document.getElementById("duFindingsWrapper")){
    hideDu();
    hideNotes();
    hideLoan();
    display(document.getElementById("pop-up"),false);
    display(document.getElementById("pop-up2"),false);
    display(document.getElementById("pop-up3"),false);
    display(document.getElementById("pop-up4"),false);
    display(document.getElementById("pop-up5"),false);
    display(document.getElementById("pop-up6"),false);
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
function showPopup4(){
  display(document.getElementById("pop-up4"),true);
  showOverlay();
}
function showPopup5(){
  display(document.getElementById("pop-up5"),true);
  showOverlay();
}
function showPopup6(){
  display(document.getElementById("pop-up6"),true);
  showOverlay();
}
function display(ele, res) {
  if(ele){
  if (res) {
    ele.classList.remove("displayNone");
  } else {
    ele.classList.add("displayNone");
  }
}
}
// display(duFindings, false);
display(document.getElementById("pop-up"),false);
display(document.getElementById("pop-up2"),false);
display(document.getElementById("pop-up3"),false);
display(document.getElementById("pop-up4"),false);
display(document.getElementById("pop-up5"),false);
display(document.getElementById("pop-up6"),false);

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
function showCondition() {
  display(listOfOptions, false);
  document.getElementById("loan").classList.add("showMenu");
  showOverlay();
}
function hideLoan() {
  display(listOfOptions, true);
  document.getElementById("loan").classList.remove("showMenu");
  hideOverlay();
}

function hideNotes() {
  display(listOfOptions, true);
  notes.classList.remove("showMenu");
  hideOverlay();
  // display(notes, false);
}
function hideDu() {
  display(listOfOptions, true);
  duFindings.classList.remove("showMenu");
  hideOverlay();
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

function expand1003()
{
  cnt +=1;
  rotateIcon(cnt);
}

function rotateIcon(cnt){
  if(cnt%2 == 0){
    document.getElementById("icon").style.transform = "rotate(180deg)";
  }
  else{
    document.getElementById("icon").style.transform = "rotate(0deg)";
  }  
}

function addIcon(){
 counter +=1;
 positionIcon(counter);
}

function positionIcon(counter){
  if(counter%2 == 0){
    document.getElementById("bottomIcon").classList.remove("addIconBottom");
    document.getElementById("bottomIcon").classList.add("addIconMiddle");
    document.getElementById("rotateArrow").style.transform = "rotate(0deg)";
  }
  else{
    document.getElementById("bottomIcon").classList.remove("addIconMiddle");
    document.getElementById("bottomIcon").classList.add("addIconBottom");
    document.getElementById("rotateArrow").style.transform = "rotate(180deg)";
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
// function rotate(event) {
//   //window.event.currentTarget.children[0].classList.add("rotate");
//   if(count&1)
//   {
//       window.event.currentTarget.children[0].style.transform="rotate(0deg)";
      
//   }
//   else {
//       window.event.currentTarget.children[0].style.transform="rotate(180deg)";
//   }
//   count=count+1;
// }
if(document.getElementById("name")){
  document.getElementById("name").innerHTML ="ALICE FIRSTIMER";}
function changeName(value){
  if(value == 1){
  document.getElementById("name").innerHTML ="ALICE FIRSTIMER";
  }
  else{
  document.getElementById("name").innerHTML ="HOMEOWNER JOHN";
  }
}
function success(){
  var success,leng,i;
  success = document.getElementsByClassName("successMsg");
  open = document.getElementsByClassName("openNum");
  close =  document.getElementsByClassName("closedNum");
  load = document.getElementsByClassName("gif");
  leng=success.length;
  for(i=1;i<leng;i++) {
    success[i].innerText="";
  }
  for(i=0,len=load.length;i<len;i++) {
 load[i].style.display="block";
  }
  setTimeout(function(){
    for(i=0,len=load.length;i<len;i++){
      load[i].style.display="none";
    }
     for(i=0;i<leng;i++) {
           success[i].innerText="Success";
           success[i].style.color="green";         
      }
      for(i=0,len=open.length;i<len;i++) {
      open[i].innerText = "0";
      close[i].innerText = "3";
      }
  },1000);
}
function success1(){
  var success,leng,i;
  success = document.getElementsByClassName("successMsg1");
  open = document.getElementsByClassName("openNum");
  close =  document.getElementsByClassName("closedNum");
  load = document.getElementsByClassName("gif");
  leng=success.length;
  for(i=0;i<leng;i++) {
    success[i].innerText="";
  }
  for(i=0,len=load.length;i<len;i++) {
 load[i].style.display="block";
  }
  setTimeout(function(){
    for(i=0,len=load.length;i<len;i++){
      load[i].style.display="none";
    }
     for(i=0;i<leng;i++) {
           success[i].innerText="Success";
           success[i].style.color="green";         
      }
      for(i=0,len=open.length;i<len;i++) {
      open[i].innerText = "0";
      close[i].innerText = "3";
      }
  },1000);
}

function displaySuspended(){
  incomedescriptionwrap.classList.toggle("hide");
  showSuspendedContent.classList.toggle("show");
  } 

(function (d) { //closure, close up
  
  //GLOBAL VARIABLES
  var suspendedlink = d.getElementById("suspendedlink"),
      // ease = d.getElementById("easing"),
      incometasks = d.getElementById("incometasks"),
      suspendedtasks=d.getElementById("suspendedtasks"),
      activecondition = d.getElementById("activecondition"),
      duration = 15,
      height, interval, counter, flag = 0,clickcount=0,contentHeight;
  
  //**************************************
  //FUNCTIONS
  //#1 this is the transition, it won't work for old IE
  // function addEasing(a) {
    
  //   if (flag === 1) { //check flag
  //     a.style.cssText = "transition: height 500ms; -webkit-transition: height 500ms; -moz-transition: height 500ms; -o-transition: height 500ms";
  //   } else {
  //     a.style.cssText = "transition: none; -webkit-transition: none; -moz-transition: none; -o-transition: none";
  //   }
    
  // }

  //#2 the slideUp
  function slideUp(a, b) {
    activecondition.style.display="none";
    height = a.offsetHeight; //declare the value of "height" variable
    counter = height; //declare the value of "counter" variable

    var subtractor = height/10;

    //add CSS3 transition
    a.style.cssText = "transition: height 500ms; -webkit-transition: height 500ms; -moz-transition: height 500ms; -o-transition: height 500ms";          

    // ease.disabled = 1;

    //to hide the content of the incometasks
    a.style.overflow = "hidden";

    //decreasing the height
    interval = setInterval(function () {
      
      counter -= subtractor;            
      if (counter > 0) {
        a.style.height = counter + "px";        
        contentHeight=height+counter;
        suspendedtasks.style.height = contentHeight + "px";
      } else {
        a.style.height = 0;
        b.disabled = 0;
        suspendedtasks.style.height = height + 55 + "px";
        // b.innerHTML = "slideDown";              
        clearInterval(interval);
      }
    }, duration);

    suspendedtasks.style.display="block";
  }

  //#3 the slideDown
  function slideDown(a, b) {

    activecondition.style.display="block";
    var adder = height/10; //the height is global variable          
    suspendedtasks.style.overflow = "hidden";
    //iteratively increase the height
    interval = setInterval(function () {            
      counter += adder;
      if (counter < height) {
        a.style.height = counter + "px";
        contentHeight=height-counter;
        suspendedtasks.style.height = contentHeight;  
      } else {
        a.style.height = height + "px";
        b.disabled = 0;
        suspendedtasks.style.height = 0;
        // b.innerHTML = "slideUp";            
        // ease.disabled = 0;
        clearInterval(interval);
      }
    }, duration);  
    
    // content.style.display="none";
  }
  
  activeConditionHead= document.getElementById("incomeName");
  //**************************************
  //BUTTONS TRIGGERS
  //#1 "slideUp/slideDown" trigger
  suspendedlink.onclick = function () {
    
    // var text = this.innerHTML;

    this.disabled = 1;
    // if (text.match(/up/gi)){
      if (clickcount%2==0){
      slideUp(incometasks, this); 
      suspendedarrow.style.transform="rotate(180deg)";
    } else {
      activeConditionHead.innerHTML="BASE INCOME";
      slideDown(incometasks, this);
      showSuspendedContent.classList.remove("show");
      suspropdescriptionwrap.classList.remove("show");
      suspendedarrow.style.transform="rotate(0deg)";
      // showSuspendedContent.classList.remove("show");
    }
    clickcount+=1;
  }
}(document));

var suspendedwrap = document.getElementById("suspendedwrap");
var suspendedlist = suspendedwrap.getElementsByClassName("suspendedlist");
for (var i = 0; i < suspendedlist.length; i++) {
  suspendedlist[i].addEventListener("click", function() {
    if(suspendclickcount==0)
    {      
    this.className += " activesuspend";
    }
    var current = document.getElementsByClassName("activesuspend");
    current[0].className = current[0].className.replace(" activesuspend", "");
    this.className += " activesuspend";
    suspendclickcount+=1;
  });
}
function showsuspendedproperty(){  
  activeConditionHead.innerHTML="INCOME FROM PROPERTY";
  showSuspendedContent.classList.remove("show");
  showSuspendedContent.classList.add("hide");
  suspropdescriptionwrap.classList.add("show");
}