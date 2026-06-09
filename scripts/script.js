let order = {
    padThai: 0,
    greenCurry: 0,
    padSee: 0,
    redCurry:0,
    
};

let images ={
    padThai: "assets/pad thai.png",
    greenCurry:"assets/Thai Green Curry.png",
    padSee: "assets/pad see e.png",
    redCurry: "assets/red curry.png",
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

let description = {
    padThai:"Stir fried rice noodles with  egg, bean sprouts, spring onion and crushed peanuts, tossed in a tamarind sauce. Served with lime.",
    greenCurry: "Traditional Thai green curry with coconut milk and seasonal vegetables. Served with Jasmine Rice.",
    padSee: "Stir fried wide noodles with egg, chinese broccoli and your choice of protein, tossed in a rich sauce. ",
    redCurry: "Traditional Thai style curry simmered in coconut milk. Served with Jasmine Rice. "
}


const dishCards = document.querySelectorAll(".dish-card");
let selectedItem=""

dishCards.forEach(function(card) {

    card.addEventListener("click", function() {
        let item = card.id;
        selectedItem=item;
        document.getElementById("dishImage").src = images [item];
        document.getElementById("dishTitle").textContent = names[item];
        document.getElementById("dishPrice").textContent = "$" + price[item];
        document.getElementById("dishDesc").textContent = description[item];
        document.getElementById("dishPanel").style.display = "block";
        document.getElementById("selectedQty").textContent= order [item]
        console.log(item);

    });

});

document.getElementById("closePanel").addEventListener("click", function (){
    document.getElementById("dishPanel").style.display= "none";

});

document.getElementById("addToOrder").addEventListener("click", function() {
    alert("Added to order!");
});

function increaseQty(item) {
    order[item]++;
    localStorage.setItem("order")
    document.getElementById("selectedQty").textContent = order[item];
    updateCart()
}

function decreaseQty(item) {
    if (order[item] > 0) {
        order[item]--;
        localStorage.setItem("order")
        document.getElementById("selectedQty").textContent = order[item];
        updateCart()

    }
}

