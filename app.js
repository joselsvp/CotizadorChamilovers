const buttonPlus = document.querySelector(".plus-btn");
const buttonMinus = document.querySelector(".minus-btn");

let amount = 0;

buttonPlus.addEventListener("click", function(e){
    amount++;
    buttonPlus.closest('.quantity').children[1].value = amount;
});

buttonMinus.addEventListener("click", function(e){
    currentValue = buttonMinus.closest('.quantity').children[1].value;
    if(currentValue > 0){
        amount--;
    }
    buttonMinus.closest('.quantity').children[1].value = amount;
});