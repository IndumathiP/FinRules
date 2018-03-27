var id,toggle;
function remove(counter) {
    if(document.getElementsByClassName("currentLink")[0]&& counter==1){
        document.getElementsByClassName("currentLink")[0].classList.remove("currentLink");
    }
    if(document.getElementsByClassName("active")[0]&&counter==2)
    {
        document.getElementsByClassName("active")[0].classList.remove("active");
    }
}

function displayLoanSummary(event) {

    id=window.event.currentTarget.innerHTML;

    if(id=="Application") {
        remove(1);
        document.getElementById("application").style.display="block";
        document.getElementById("loanInformation").style.display="none";
        window.event.currentTarget.classList.add("currentLink");
    }
    else if(id=="Loan Information") {
        remove(1);
        document.getElementById("loanInformation").style.display="block";
        document.getElementById("application").style.display="none"; 
        window.event.currentTarget.classList.add("currentLink");
    }
}
function toggleName(event) {

    toggle=window.event.currentTarget.innerHTML;
    var i,leng

    if(toggle=="Alice"){
        remove(2);
        window.event.currentTarget.classList.add("active");       
    }
    else if(toggle=="John"){
        remove(2);
        window.event.currentTarget.classList.add("active");
    }
}
function iconToggle(event) {
    
    var counter;
    counter=window.event.currentTarget.getAttribute("count");
    //counter=parseInt(counter);
    
    if(counter=="0")
    {
        window.event.currentTarget.children[0].style.transform="rotate(180deg)";
        window.event.currentTarget.setAttribute("count","1");
    }
    else {
        window.event.currentTarget.children[0].style.transform="rotate(0deg)";
        window.event.currentTarget.setAttribute("count","0");
    }

    
}