var b = document.querySelector("#cat")
var c = document.querySelector("#count")

let counting = 0;
b.addEventListener("click", function(){
    c.textContent = counting++;
    b.innerHTML = ("https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5Ny85NTkvb3JpZ2luYWwvc2h1dHRlcnN0b2NrXzYzOTcxNjY1LmpwZw==")
})
