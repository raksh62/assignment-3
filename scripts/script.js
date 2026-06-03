
const searchBar = document.getElementById("searchBar")
searchBar.addEventListener("input", function() {
    console.log(searchBar.value );
});

const padThaiPrice = 22;
const greenCurryPrice =25;

let orderTotal=padThaiPrice+ greenCurryPrice;
console.log (orderTotal);