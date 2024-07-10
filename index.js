const inbox = document.getElementById("ip-1");
const lst = document.getElementById("list-contain");

function addtask() {
    if (inbox.value.trim() === "") {    //if input box is empty then alert
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");   //will create the list item
        li.innerHTML = inbox.value;   //will add the text in the list item
        lst.appendChild(li);      //this will add that list item in the ul
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inbox.value = "";       //clears the text written in input
    }
    savdata();
}
lst.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {    //will search for the list element
        e.target.classList.toggle("check"); //will add/remove check class on mouse click
        savdata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();    //will remove the span element on mouse click 
        savdata();
    }
}, false)
function savdata(){ //will save the list items in the local storage
    localStorage.setItem("data",lst.innerHTML);
}

function show(){
    lst.innerHTML=localStorage.getItem("data");//show the saved data even after refreshing
}
show();