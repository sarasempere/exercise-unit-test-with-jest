const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let euro = valueInDollar/oneEuroIs.USD
    let valueInYen = euro * oneEuroIs.JPY;
    // retornamos el valor
    //console.log(valueInYen)
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let euro = valueInYen/oneEuroIs.JPY
    let valueInPounds = euro * oneEuroIs.GBP;
    // retornamos el valor
    return valueInPounds;
}


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };