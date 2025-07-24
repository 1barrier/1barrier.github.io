const button = document.querySelector("button")
// THIS IS A COMMENT
function activated() {
button.textContent = "You clicked me!";
   setTimeout(() => {
    btn.textContent = "Press me";
   }, 1000);
}

button.addEventListener("click", activated);