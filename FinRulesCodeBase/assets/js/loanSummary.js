var id,toggle,counter=0;
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
    label=document.querySelectorAll("#application .labelValue");
    leng=label.length;

    if(toggle=="Alice"){
        remove(2);
        window.event.currentTarget.classList.add("active");
        //document.getElementById("monthly").style.display="block";
        document.getElementsByClassName("table")[0].style.display="table";
        document.getElementsByClassName("table")[1].style.display="table";
        for(i=0;i<leng;i++) {
            label[i].classList.remove("none");
            label[i].classList.add("block");
        }
        
    }
    else if(toggle=="John"){
        remove(2);
        window.event.currentTarget.classList.add("active");
        //document.getElementById("monthly").style.display="none";
        document.getElementsByClassName("table")[0].style.display="none";
        document.getElementsByClassName("table")[1].style.display="none";
        for(i=0;i<leng;i++) {
            label[i].classList.remove("block");
            label[i].classList.add("none");
        }
    }
}
function iconToggle(event) {
    if(counter&1)
    {
        window.event.currentTarget.children[0].style.transform="rotate(0deg)";
        counter=counter+1;
    }
    else {
        window.event.currentTarget.children[0].style.transform="rotate(180deg)";
        counter=counter+1;
    }
    
}