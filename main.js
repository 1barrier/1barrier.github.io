const button = document.querySelector("button")

button.addEventListener("click", () => {
   button.textContent = "You clicked me!";
   setTimeout(() => {
    btn.textContent = "Press me";
   }, 1000);
});