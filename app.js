const buttonPlus = document.querySelectorAll(".plus-btn");
const buttonMinus = document.querySelectorAll(".minus-btn");


buttonPlus.forEach(function(button) {
    button.addEventListener("click", function(e){
        button.closest('.quantity').children[1].value = parseInt( button.closest('.quantity').children[1].value) + 1;
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
