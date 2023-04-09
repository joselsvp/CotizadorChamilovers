const buttonPlus = document.querySelectorAll(".plus-btn");
const buttonMinus = document.querySelectorAll(".minus-btn");
const summaryTotal = document.querySelector(".summary-total");
const totalDevolution = document.querySelector(".total-devolution");
const payWith = document.querySelector("#payment-with");

let productsAdd = [];
let totalPurchase = 0

buttonPlus.forEach(function(button, index) {
    button.addEventListener("click", function(e){
        let price = parseFloat(proccessToGetPriceProduct(button));
        let totalAddItems = parseInt( button.closest('.quantity').children[1].value) + 1;
        button.closest('.quantity').children[1].value = totalAddItems;
        productsAdd[index] = totalAddItems;
        showTotalBox(productsAdd);
        totalShopping(price);
    });

});

function proccessToGetPriceProduct(element){
    return element.parentElement.nextElementSibling.children[0].innerHTML;
}

function totalShopping(price = 0, isAdd = true){
    isAdd ? totalPurchase += price : totalPurchase -= price;
    document.querySelector(".total-shopping").innerHTML = totalPurchase;
    totalDevolution.innerHTML = (payWith.value > 0) ? document.querySelector("#payment-with").value - totalPurchase : 0;
}

payWith.addEventListener("keyup", function(e){
    totalShopping();
});

function showTotalBox(productsAdd){
    let totalAddProducts =  productsAdd.reduce((a , b) => {
        return a + b;
    }, 0);
    summaryTotal.innerHTML = totalAddProducts;
}

buttonMinus.forEach(function(button, index){
    button.addEventListener("click", function(e){
        let currentValue = button.closest('.quantity').children[1].value;
        if(currentValue > 0){
            productsAdd[index] = productsAdd[index] - 1;
            showTotalBox(productsAdd);
            let price = parseFloat(proccessToGetPriceProduct(button));
            totalShopping(price, false);
            currentValue--;
        }
        button.closest('.quantity').children[1].value = currentValue;
    });
});
