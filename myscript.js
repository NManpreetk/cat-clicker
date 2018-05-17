var b = document.querySelector("#cat")
var c = document.querySelector("#counter")

let counting = 0;
b.addEventListener("click", function(){
    c.textContent = counting++;
})
