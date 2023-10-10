const  fruits = ['apple', 'orange', 'banana'];
function addFruits() {
    fruits.push("mango");
    var pElements = document.querySelectorAll("p");
  
     for (var i = 0; i < fruits.length; i++) {
       if (i < pElements.length) { 
         pElements[i].textContent = fruits[i];
       }
     }
  }
  var clickButton = document.getElementsByTagName("li")[0];
  clickButton.addEventListener("click", addFruits);