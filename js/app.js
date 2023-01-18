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

    kontrolaVyhry(data, objekt, index);
}

function kontrolaVyhry(data, objekt, index) {
    console.log(objekt.childName + " " + objekt.id);

    // console.log(hraciPole[0].childNodes[0].className);

    
    for (let i = 0; i < 26*14; i++) {
        if (hraciPole[i].hasChildNodes() && hraciPole[i + 1].hasChildNodes() && hraciPole[i + 2].hasChildNodes() && hraciPole[i + 3].hasChildNodes() && hraciPole[i + 4].hasChildNodes()) {
            if (hraciPole[i].childNodes[0].className == hraciPole[i+1].childNodes[0].className && 
                hraciPole[i+1].childNodes[0].className == hraciPole[i+2].childNodes[0].className && 
                hraciPole[i+2].childNodes[0].className == hraciPole[i+3].childNodes[0].className && 
                hraciPole[i+3].childNodes[0].className == hraciPole[i+4].childNodes[0].className) {

                console.log("VYHRA " + objekt.symbol);
            }
        }
    }
    
}
  
function novyObjekt(symbol, id, childName) {
    this.symbol = symbol;
    this.id = id;
    this.childName = childName;
}


