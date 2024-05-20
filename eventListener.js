//count the button clicked times

function addClickCount() {
    let count = 0
    document.getElementById("btn").addEventListener("click", function click(){
        console.log("Button Clicked !!", ++count);
    });  
}

addClickCount();

