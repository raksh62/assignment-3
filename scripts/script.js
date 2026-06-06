let order = {
    greenCurry: 0,
    padThai: 0
    
};

let prices = {
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

