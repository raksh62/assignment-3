let order = {
    padThai: 0,
    greenCurry: 0,
    padSee: 0,
    redCurry:0,
    
};

let price = {
 padThai: 25,
 greenCurry: 22,
 padSee: 23,
 redCurry:20,
};

let description = {
    padThai:"Stir fried rice noodles with  egg, bean sprouts, spring onion and crushed peanuts, tossed in a tamarind sauce. Served with lime.",
    greenCurry: "Traditional Thai green curry with coconut milk and seasonal vegetables. Served with Jasmine Rice.",
    padSee: "Stir fried wide noodles with egg, chinese broccoli and your choice of protein, tossed in a rich sauce. ",
    redCurry: "Traditional Thai style curry simmered in coconut milk. Served with Jasmine Rice. "
}

const dishCards = document.querySelectorAll(".dish-card");

dishCards.forEach(function(card) {

    card.addEventListener("click", function() {

        document.getElementById("dishPanel").style.display = "block";

    });

});

function increaseQty(item) {
    order[item]++;
    document.getElementById(item + "Qty").textContent = order[item];
    updateCart()
}

function decreaseQty(item) {
    if (order[item] > 0) {
        order[item]--;
        document.getElementById(item + "Qty").textContent = order[item];
        updateCart()

    }
}

function updateCart () {
    let cartHTML= ""
    let total=0
    for (let item in order){
        if (order[item] > 0) {
            let itemTotal= order [item] * price [item];
            cartHTML += `<p> ${item}: ${order[item]} x $${price[item]} = $${itemTotal} </p>` 
            total += itemTotal;
        }
document.getElementById("cartsum").innerHTML = cartHTML
    }
}