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
let docasneData = [];


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
    box.classList.add(symbol);
    let id = box.getAttribute('id');
    
    let objekt = new novyObjekt(symbol, id);

    data[index].push({
        id: objekt.id
    }); 
        
    console.log(data);

    // if (data[index].length < 5) 
    //     console.log("Na poli je méně než 5 " + objekt.symbol + " -> neprobíhá kontrola výhry");
    // else 
        kontrolaVyhry(data, objekt, index);
}

function kontrolaVyhry(data, objekt, index) {
    console.log(objekt.symbol + " " + objekt.id);
    let i = 0; 

    var indexLength = data[index].length;

    if (indexLength >= 5) {

        // data[index].forEach(id => {
        //     console.log("DATA: "+ id);
        // });

        for (let i = indexLength; i > 0; i--) {
            console.log(data[index][i - 1].id);

            data[index].forEach(id => {
                if ((data[index][i - 1].id - 1) == id) {
                    console.log("TRUE");
                } else {
                    console.log(id);
                }

            });
            
        }
    }

    // while (i < data[index].length) {
    //     console.log("SYMBOL: " + symbol, data[index][i]);
    //     docasneData.push(data[index][i]);
    //     i++;
    // }

    // console.log(data[index]);

    // for (let i = 0; i < data[index].length; i++) {
    //     console.log(i);
    //     console.log("HODNOTY X = " + data[index][i]);
    // }
}
  
function novyObjekt(symbol, id) {
    this.symbol = symbol;
    this.id = id;
}


