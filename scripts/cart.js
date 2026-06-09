
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
   
let names = {
       padThai: "Pad Thai",
       greenCurry: "Gaeng Keow Won (Green Curry)",
       padSee: "Pad See Ew",
       redCurry: "Red Curry",
       
   };


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
    document.getElementById("cartsum").innerHTML = cartHTML
    document.getElementById("subtotal").textContent = "$Subtotal" + total;
    document.getElementById("total").textContent = "$Total" + total;
}