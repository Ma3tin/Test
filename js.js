window.onload = start;
function start() {
    let button = document.getElementById("btn");
    button.addEventListener("click", hide)
    let text = document.getElementById("collapseOne");
}

function hide() {
    let button = document.getElementById("collapseOne");
    if (button.style.display === "block"){
        button.style.display = "none";
    }
    else button.style.display = "block";
}