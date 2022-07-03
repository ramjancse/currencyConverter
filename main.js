
const elements = function(){
    const currencyFromElem = document.getElementById('currencyFrom');
    const currencyToElem = document.getElementById('currencyTo');
    const resFromElem = document.getElementById('from');
    const resToElem = document.getElementById('to');
    return {
        currencyFromElem,
        currencyToElem,
        resFromElem,
        resToElem
    };
}
const element = elements();
const { currencyFromElem, currencyToElem, resFromElem, resToElem } = element;

function calculate() {
    const baseCur = currencyFromElem.value;
    const convertedCur = currencyToElem.value;
    
    fetch(`https://free.currconv.com/api/v7/convert?q=${baseCur}_${convertedCur}&compact=ultra&apiKey=e134857b50238ae61347`)
        .then((response) => response.json())
        .then((data) => {
            const countryToCountey = `${baseCur}_${convertedCur}`;
           
            const rate = data;
            resFromElem.innerHTML = data
           
        })
        .catch((error) => console.log(error));
}

currencyFromElem.addEventListener('change', calculate);
currencyToElem.addEventListener('change', calculate);


calculate();