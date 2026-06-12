let placeOrder= JSON.parse(localStorage.getItem( "placeOrder"));

if(!placeOrder){
    placeOrder={
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

   function updateCheckout (){
    let confirmationHTML=""
    let total=0
    for (let item in placeOrder){
        if (placeOrder[item] > 0) {
            let itemTotal= placeOrder [item] * price [item];

            confirmationHTML += `<p> ${names[item]}: ${placeOrder[item]} x $${price[item]} = $${itemTotal} </p>` ;

            total += itemTotal;
        }
    }
    document.getElementById("confirmationSummary").innerHTML=confirmationHTML;
    document.getElementById("confirmationTotal").textContent= "Total Paid: $" + total;


}

updateCheckout ()