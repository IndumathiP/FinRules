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
var i,j,counter,backfromTask,count=0;
document.getElementsByClassName("next")[0].style.display="inline-block";
(function () {
getClass[0].style.display="block";
}) ();

function clear() {

    for(i=0;i<leng;i++)
    {
        getClass[i].style.display="";
        if(i==1) {
            document.getElementsByClassName("taskWrapper")[0].style.display="";
            document.getElementsByClassName("taskDetails")[0].style.display="";
        }
    }
}

function button(pageNo) {
    j=pageNo;
    if (pageNo<(leng-1)&& counter!=0){
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
    
    if(backfromTask==1)
    {   j=1;
        verbalVerification();
        backfromTask=0;
    }
    else {

    
    getClass[j].style.display="";
    clear();
    j=j-1;

    getClass[j].style.display="block";
    
    if(j==1 && backfromTask!=1) {
        verbalVerification();
        
    }
    else {counter=1;
        button(j);
    }
    }
    
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
    if(j==1) {
        verbalVerification();
//        return;
    }
    else {
        counter=1;
        button(j);
    }
    backfromTask=0;
    
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
    document.getElementsByClassName("taskWrapper")[0].style.display="block";  
    verbalVerification();
   }
   else if(targetId=="businessrule_")
   {
    summaryTab.style.display="none";
    document.getElementsByClassName("businessRule")[0].style.display="block";    
    button(2);
   }

} 

function verbalVerification(event) {
     document.getElementsByClassName("taskWrapper")[0].style.display="block";
     document.getElementsByClassName("taskDetails")[0].style.display="";
     counter=0;
     if(window.event.currentTarget.className=="select") {
         document.getElementsByClassName("taskDetails")[0].style.display="block";
         document.getElementsByClassName("taskWrapper")[0].style.display="";
         counter=1;
         backfromTask=1;
    }
    button(1);
}
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