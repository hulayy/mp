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
}

function vlozSymbol(box, symbol) {
    var symbolDiv = document.createElement('div');
    symbolDiv.className = symbol;

    box.appendChild(symbolDiv);

    let id = box.getAttribute('id');
    let childName = box.childNodes[0].className;

    let objekt = new novyObjekt(symbol, id, childName);

    var vyhercuvSymbol = kontrolaVyhry(data, objekt, index);

    if (vyhercuvSymbol) {
        console.log("Vyhrál hráč se symbolem: " + vyhercuvSymbol);
        vyherniObrazovka(vyhercuvSymbol);
    }
}

function kontrolaVyhry(data, objekt, index) {
    console.log(objekt.childName + " " + objekt.id);
    
    for (let i = 0; i < 27*15; i++) {
        // Kontrola horizontálně 
        if (hraciPole[i] && hraciPole[i + 1] && hraciPole[i + 2] && hraciPole[i + 3] && hraciPole[i + 4]) {
            if (hraciPole[i].hasChildNodes() && hraciPole[i + 1].hasChildNodes() && hraciPole[i + 2].hasChildNodes() && hraciPole[i + 3].hasChildNodes() && hraciPole[i + 4].hasChildNodes()) {
                if (hraciPole[i].childNodes[0].className == hraciPole[i+1].childNodes[0].className && 
                    hraciPole[i+1].childNodes[0].className == hraciPole[i+2].childNodes[0].className && 
                    hraciPole[i+2].childNodes[0].className == hraciPole[i+3].childNodes[0].className && 
                    hraciPole[i+3].childNodes[0].className == hraciPole[i+4].childNodes[0].className) {

                    return objekt.symbol;
                }
            }
        }

        //Kontrola Vertikálně 
        if (hraciPole[i] && hraciPole[i + 26] && hraciPole[i + 26*2] && hraciPole[i + 26*3] && hraciPole[i + 26*4]) {
            if (hraciPole[i].hasChildNodes() && hraciPole[i + 26].hasChildNodes() && hraciPole[i + 26*2].hasChildNodes() && hraciPole[i + 26*3].hasChildNodes() && hraciPole[i + 26*4].hasChildNodes()) {
                if (hraciPole[i].childNodes[0].className == hraciPole[i+26].childNodes[0].className && 
                    hraciPole[i+26].childNodes[0].className == hraciPole[i+26*2].childNodes[0].className && 
                    hraciPole[i+26*2].childNodes[0].className == hraciPole[i+26*3].childNodes[0].className && 
                    hraciPole[i+26*3].childNodes[0].className == hraciPole[i+26*4].childNodes[0].className) {

                    return objekt.symbol;
                }
            }
        }

        //Kontrola diagonálně z leva do prava
        if (hraciPole[i] && hraciPole[i + 27] && hraciPole[i + 27*2] && hraciPole[i + 27*3] && hraciPole[i + 27*4]) {
            if (hraciPole[i].hasChildNodes() && hraciPole[i + 27].hasChildNodes() && hraciPole[i + 27*2].hasChildNodes() && hraciPole[i + 27*3].hasChildNodes() && hraciPole[i + 27*4].hasChildNodes()) {
                if (hraciPole[i].childNodes[0].className == hraciPole[i+27].childNodes[0].className && 
                    hraciPole[i+27].childNodes[0].className == hraciPole[i+27*2].childNodes[0].className && 
                    hraciPole[i+27*2].childNodes[0].className == hraciPole[i+27*3].childNodes[0].className && 
                    hraciPole[i+27*3].childNodes[0].className == hraciPole[i+27*4].childNodes[0].className) {

                    return objekt.symbol;
                }
            }
        }

        //Kontrola diagonálně z prava do leva
        if (hraciPole[i] && hraciPole[i + 25] && hraciPole[i + 25*2] && hraciPole[i + 25*3] && hraciPole[i + 25*4]) {
            if (hraciPole[i].hasChildNodes() && hraciPole[i + 25].hasChildNodes() && hraciPole[i + 25*2].hasChildNodes() && hraciPole[i + 25*3].hasChildNodes() && hraciPole[i + 25*4].hasChildNodes()) {
                if (hraciPole[i].childNodes[0].className == hraciPole[i+25].childNodes[0].className && 
                    hraciPole[i+25].childNodes[0].className == hraciPole[i+25*2].childNodes[0].className && 
                    hraciPole[i+25*2].childNodes[0].className == hraciPole[i+25*3].childNodes[0].className && 
                    hraciPole[i+25*3].childNodes[0].className == hraciPole[i+25*4].childNodes[0].className) {

                    return objekt.symbol;
                }
            }
        }
    }
    return null; 
}

function vyherniObrazovka(symbol) {
    var vyhra = document.getElementById('vyhra');

    var text = document.getElementById("nadpis");
    text.innerText = "Vyhrál hráč se symbolem: " + symbol;
    
    vyhra.classList.add("vyherniObrazovka");
}

var tlacitko = document.getElementById("restart")

tlacitko.addEventListener('click', restart, true);

function restart(e) {
    console.log("Klik");
    location.reload();

    e.preventDefault();
}

function novyObjekt(symbol, id, childName) {
    this.symbol = symbol;
    this.id = id;
    this.childName = childName;
}


