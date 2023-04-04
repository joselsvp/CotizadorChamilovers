const buttonPlus = document.querySelectorAll(".plus-btn");
const buttonMinus = document.querySelectorAll(".minus-btn");
const summaryTotal = document.querySelector(".summary-total");
var totalProducts = 0;

summaryTotal.innerHTML = '33'

let aux = 0;
let count = 0

buttonPlus.forEach(function(button, index) {
    button.addEventListener("click", function(e){
        let totalAddItems = parseInt( button.closest('.quantity').children[1].value) + 1;
        button.closest('.quantity').children[1].value = totalAddItems;
        totalProducts = totalAddItems

        if(aux != index){
            let test = 0;
            test += totalProducts;
            console.log("test", test)

            aux++
  
        }else { 
            console.log("totalProducts_2", totalProducts)

        }
    });

});


buttonMinus.forEach(function(button){
    button.addEventListener("click", function(e){
        let currentValue = button.closest('.quantity').children[1].value;
        if(currentValue > 0){
            currentValue--;
        }
        button.closest('.quantity').children[1].value = currentValue;
    });
});
