const buttonPlus = document.querySelectorAll(".plus-btn");
const buttonMinus = document.querySelectorAll(".minus-btn");
const summaryTotal = document.querySelector(".summary-total");

let productsAdd = [];

buttonPlus.forEach(function(button, index) {
    button.addEventListener("click", function(e){
        let totalAddItems = parseInt( button.closest('.quantity').children[1].value) + 1;
        button.closest('.quantity').children[1].value = totalAddItems;
        productsAdd[index] = totalAddItems;
        showTotalBox(productsAdd)
    });

});

function showTotalBox(productsAdd){
    let totalAddProducts =  productsAdd.reduce((a , b) => {
        return a + b;
    }, 0);
    summaryTotal.innerHTML = totalAddProducts;
}

buttonMinus.forEach(function(button){
    button.addEventListener("click", function(e){
        let currentValue = button.closest('.quantity').children[1].value;
        if(currentValue > 0){
            currentValue--;
        }
        productsAdd[index] = totalAddItems;

        button.closest('.quantity').children[1].value = currentValue;
    });
});
