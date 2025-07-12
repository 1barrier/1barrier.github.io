function foo() {
   console.log("Hello World!");

   let something = document.getElementById("Button");
   if (something != null) {
      if (something.localName == "aRandomButton") {
         console.log("Hello aRandomButton");
      } else {
         console.log("Goodbye"+something.localName);
      }
   }
}

function activation() {
   let textfield = document.getElementsByName("submitButton")
   if (textfield == nil) {
      console.log("textfield doesn't exist")
   } else {
      console.log("textfield is registered "+textfield.localName)
   }
}

document.querySelectorAll("button").forEach(btn=>btn.onclick=ev=>console.log(`Hey, you have clicked the ${btn.textContent} button!}`))