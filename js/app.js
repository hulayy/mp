var hraciPole = document.querySelectorAll('[data-cell]');
var symbol_x = 'x';
var symbol_o = 'o';
var symbol_t = 't';

let symbol;
let poradi = 0;
let index = 0;
let cislo = 1; 

let data = [
    [x] = [],
    [o] = [],
    [t] = [],
];


hraciPole.forEach(box => {
    box.addEventListener('click', zpracujKlik, {once: true})
    box.setAttribute('id', cislo);
    cislo++;
})

function zpracujKlik(e) {
    var zakliknutyBox = e.target;

    switch (poradi){
        case 0:
            symbol = symbol_x;
            index = 0;
            break;
        case 1:
            symbol = symbol_o;
            index = 1;
            break;
        case 2:
            symbol = symbol_t;
            index = 2;
            break;
    }

    vlozSymbol(zakliknutyBox, symbol);

    if (poradi < 2) {
        poradi++;
    } else {
        poradi = 0;
    }

    console.log(hraciPole);
}

function vlozSymbol(box, symbol) {
    box.classList.add(symbol);
    let id = box.getAttribute('id');
    
    let objekt = new novyObjekt(symbol, id);

    kontrolaVyhry(data, objekt, index);
}

function kontrolaVyhry(data, objekt, index) {
    console.log(objekt.symbol + " " + objekt.id);
    
    for (let i = 0; i < 26; i++) {
        if (hraciPole[i] == hraciPole[i+1] && hraciPole[i+1] == hraciPole[i+2] &&hraciPole[i+2] == hraciPole[i+3] && hraciPole[i+3]
        == hraciPole[i+4]) {
            console.log("VYHRA " + objekt.symbol);
        }
    }
}
  
function novyObjekt(symbol, id) {
    this.symbol = symbol;
    this.id = id;
}


