
       function init(){
        var nameInput = document.getElementById("inputsection__text");

        nameInput.addEventListener("input", function(e){
        var nameInput = document.getElementById("inputsection__text");
        var logName = document.getElementById("formsection__heading");        
        logName.innerHTML = nameInput.value;
         });
 }      
      