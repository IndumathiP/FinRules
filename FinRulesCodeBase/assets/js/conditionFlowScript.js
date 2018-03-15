function enabledCheckbox(event) {
    var check = window.event.currentTarget.checked;
    var parent = window.event.currentTarget.parentElement.parentElement;
    if (check) {
      parent.style.border = "2px solid #4CAB9C";
    }
    else {
      parent.style.borderWidth = "0 0 3px 0";
      parent.style.borderStyle = "solid";
      parent.style.borderColor = "transparent transparent #FECD62 transparent";
    }
    
}

var getClass=document.getElementsByClassName("tab-content") ;
var leng=getClass.length;
var i,j;
document.getElementsByClassName("next")[0].style.display="inline-block";
(function () {
getClass[0].style.display="block";
}) ();

function clear() {

    for(i=0;i<leng;i++)
    {
        getClass[i].style.display="";
    }
}

function button(pageNo) {
    j=pageNo;
    if (pageNo<(leng-1)){
        document.getElementsByClassName("next")[0].style.display="inline-block";
    }
    else {
        document.getElementsByClassName("next")[0].style.display="none";
    }
    if (pageNo>0) {
        document.getElementsByClassName("back")[0].style.display="inline-block";
    }
    else {
        document.getElementsByClassName("back")[0].style.display="none";
    }
    if(pageNo==(leng-1)) {
        document.getElementsByClassName("save")[0].style.display="inline-block";
        document.getElementsByClassName("saveUser")[0].style.display="inline-block";
    }
    else {
        document.getElementsByClassName("save")[0].style.display="none";
        document.getElementsByClassName("saveUser")[0].style.display="none";
    }
    navTabs(j);
}
function cancel() {
    window.open("activecondition.html","_self");
}
function navTabs(pageNo) {
    var navEffect=document.getElementsByClassName("tablink");
    var navLength=navEffect.length;
    var k;
    for (k=0;k<navLength;k++)
    {
        navEffect[k].classList.remove("current");
    }
    navEffect[pageNo].classList.add("current");
}
   
function back() {
    getClass[j].style.display="";
    j=j-1;
    getClass[j].style.display="block";
    button(j);
    
}    

function next() {
    for(j=0;j<leng;j++) 
    {
        if(getClass[j].style.display=="block") {
            break;
        }
    }
    clear();
    j=j+1;
    getClass[j].style.display="block";
    button(j);
}

function summaryNavigation(event) {
   var targetId= window.event.currentTarget.id;
   var summaryTab=document.getElementsByClassName("summary")[0];
   var page;
   if(targetId=="condition_")
   {
    summaryTab.style.display="none";
    document.getElementsByClassName("conditionTab")[0].style.display="block";    
    button(0);
   }
   else if(targetId=="task_")
   {
    summaryTab.style.display="none";
    document.getElementsByClassName("taskTab")[0].style.display="block";    
    button(1);
   }
   else if(targetId=="businessrule_")
   {
    summaryTab.style.display="none";
    document.getElementsByClassName("businessRule")[0].style.display="block";    
    button(2);
   }
} 