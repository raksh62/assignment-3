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
