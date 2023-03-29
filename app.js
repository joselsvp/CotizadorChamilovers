const buttonPlus = document.querySelector(".plus-btn");
let amount = 0;

buttonPlus.addEventListener("click", function(e){
    amount++;
    buttonPlus.closest('.quantity').children[1].value = amount;
});