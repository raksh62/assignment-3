
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

let images ={
    padThai: "assets/pad thai.png",
    greenCurry:"assets/Thai Green Curry.png",
    padSee: "assets/pad see e.png",
    redCurry: "assets/red curry.png",
}



function updateCart () {
    let cartHTML= ""
    let summaryHTML=""
    let total=0
    for (let item in order){
        if (order[item] > 0) {
            let itemTotal= order [item] * price [item];

            cartHTML+= 
            `<article class= "cart-card"> 
            <img src= "${images[item]}" alt="${names[item]}">

            <div class= "cart-info">
            <h2>${names[item]} </h2>
            <p> Mild </p>
            <p> Quantity :${order[item]} </p>
            </div>

            <p class="cart-card-price">$${itemTotal}</p>
            </article>
            `


            summaryHTML += `<p> ${names[item]}: ${order[item]} x $${price[item]} = $${itemTotal} </p>` ;

            total += itemTotal;
        }
    }

    document.getElementById("cartSum").innerHTML = summaryHTML
    document.getElementById("cartItems").innerHTML = cartHTML
    document.getElementById("subtotal").textContent = "Subtotal $" + total;
    document.getElementById("total").textContent = "Total $" + total;
}
updateCart ()