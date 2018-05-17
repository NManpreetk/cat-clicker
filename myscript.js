var b1 = document.querySelector("#cat1")
var c1 = document.querySelector("#count1")
var b2 = document.querySelector("#cat2")
var c2 = document.querySelector("#count2")
var h1 = document.querySelector("#catone")
var h2 = document.querySelector("#cattwo")

h1.style.textAlign = "center";
h2.style.textAlign = "center";

let counting = 0;
let add = 0;

let x = "red cat";
let y = "blue cat";

h1.textContent = x;
h2.textContent = y;

b1.addEventListener("click", function () {
    c1.textContent = counting++;
})


b2.addEventListener("click", function () {
    c2.textContent = add++;
})

























// function anotherCat() {
//     var b2 = document.createElement("span");
//     var t = document.createTextNode("Total clicks: ");
//     b2.appendChild(t)
//     document.body.appendChild(b2);
//     var x = 0;
//     cat2.addEventListener("click", function () {
//         document.createElement("span").textContent++
//     })
//     console.log(x)
// }

// console.log(anotherCat())