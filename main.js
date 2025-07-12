function activation(button) {
   if (button == null) {
      warn("Null button")
      return
   }
   console.log(button.localname)
}

document.querySelectorAll("button").forEach( (item) => {
   item.addEventListener("click", activation);
});