let order = JSON.parse(localStorage.getItem("order"))

if(!order){
    order={
    padThai: 0,
    greenCurry: 0,
    padSee: 0,
    redCurry:0,
    };
}

let price = {
    padThai: 25,
    greenCurry: 22,
    padSee: 23,
    redCurry:20,
   };
   
let names = {
       padThai: "Pad Thai",
       greenCurry: "Gaeng Keow Won (Green Curry)",
       padSee: "Pad See Ew",
       redCurry: "Red Curry",
       
   };



   function updateCheckout () {
    let summaryHTML=""
    let total=0
    for (let item in order){
        if (order[item] > 0) {
            let itemTotal= order [item] * price [item];

            summaryHTML += `<p> ${names[item]}: ${order[item]} x $${price[item]} = $${itemTotal} </p>` ;

            total += itemTotal;
        }
    }

    document.getElementById("checkoutSummary").innerHTML = summaryHTML
    document.getElementById("checkoutSubtotal").textContent = "Subtotal $" + total;
    document.getElementById("checkoutTotal").textContent = "Total $" + total;
}

document.getElementById("finishOrder")
.addEventListener("click",function(){
    localStorage.setItem("placeOrder", JSON.stringify(order)
);

});
function updateCartCount () {
    let totalItems= 0;
    for (let item in order){
        totalItems += order[item];
    }
    document.getElementById("cartCount").textContent= totalItems

}

function cartIsEmpty() {
    let totalItems = 0;

    for (let item in order) {
        totalItems += order[item];
    }

    return totalItems === 0;
}

if (cartIsEmpty()) {
    alert("Your cart is empty.");
    window.location.href = "menu.html";
}

cartIsEmpty()

updateCheckout ()
updateCartCount ()