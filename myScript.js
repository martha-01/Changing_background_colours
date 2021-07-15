let body = document.querySelector("body");
// let container = document.querySelector(".container");
let red = document.querySelector("#red");
let yellow = document.querySelector("#yellow");
let blue = document.querySelector("#blue");
let green = document.querySelector("#green");
let reset = document.querySelector("#reset");

// red.addEventListener("mouseenter", function() {
//     red.style.background = "#fb3640";
// });
// red.addEventListener("mouseleave", function() {
//     red.style.background = "rgb(127,128,129)";
// });

// yellow.addEventListener("mouseenter", function() {
//     yellow.style.background = "#ffdf6b";
// });
// yellow.addEventListener("mouseleave", function() {
//     yellow.style.background = "rgb(127,128,129)";
// });

// blue.addEventListener("mouseenter", function() {
//     blue.style.background = "#3d84b8";
// });
// blue.addEventListener("mouseleave", function() {
//     blue.style.background = "rgb(127,128,129)";
// });

// green.addEventListener("mouseenter", function() {
//     green.style.background = "#4aa96c ";
// });
// green.addEventListener("mouseleave", function() {
//     green.style.background = "rgb(127,128,129)";
// });

red.addEventListener("click", function() {
    body.style.background = "#fb3640";
});

yellow.addEventListener("click", function() {
    body.style.background = "#ffdf6b";
});

blue.addEventListener("click", function() {
    body.style.background = "#3d84b8";
});

green.addEventListener("click", function() {
    body.style.background = "#4aa96c ";
});

reset.addEventListener("click", function() {
    body.style.background = "gainsboro";
});
