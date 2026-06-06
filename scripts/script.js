let order = {
    greenCurry: 0,
    padThai: 0
    
};

let price = {
 greenCurry: 22,
 padThai: 25

};

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

    }
}