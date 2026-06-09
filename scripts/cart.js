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