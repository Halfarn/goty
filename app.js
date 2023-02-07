document.querySelector("btn")
document.getElementById("btn").addEventListener("click", myFunction)
function myFunction() {
    var check=document.getElementById("check").value == "Elden Ring";
    if (check){document.getElementById("answer").innerHTML = "You were correct! The answer was Elden Ring."}
    if(!check){document.getElementById("answer").innerHTML = "You were incorrect. Try again!"}
}