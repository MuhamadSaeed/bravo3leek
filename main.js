let input = document.querySelector(".input");
let form = document.querySelector("form");
let h4 = document.querySelector(".head");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value == "") {
        h4.classList.remove("hid");
        document.querySelector("#myvideo").style.display = "none";
    } else {
        h4.classList.add("hid");
        document.querySelector("#myvideo").style.display = "block";
        document.querySelector("#myvideo").muted = false;
        document.querySelector("#myvideo").play();
    }
    input.value = "";
});

let colors = ["black", "rgb(30 216 225)", "white", "rgb(37, 137, 177)", "rgb(150, 223, 14)", "rgb(223, 191, 14)"];
setInterval(function() {
    let randomNumb = Math.floor(Math.random() * colors.length)
    document.querySelector("footer span").style.color = colors[randomNumb]
}, 1000)
