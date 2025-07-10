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