
const elements = function(){
    const currencyOneElem = document.getElementById('currencyFrom');
    const valueOneElem = document.getElementById('from');
    const currencyTwoElem = document.getElementById('currencyTo');
    const valueTowElem = document.getElementById('to');
    const swapBtn = document.getElementById('swap');
    return {
        currencyOneElem,
        valueOneElem,
        currencyTwoElem,
        valueTowElem,
        swapBtn
    };
}
const element = elements();
const { currencyOneElem, valueOneElem, currencyTwoElem, valueTowElem,swapBtn } = element;

function calculate() {
    const currencyOneSelected = currencyOneElem.value;
    const valueOneInput = valueOneElem.value;

    const currencyTwoSelected = currencyTwoElem.value;
    const valueTwoInput = valueTowElem.value;
    
    
    // console.log(convertedMoney);
    
    fetch(`https://v6.exchangerate-api.com/v6/c63e4c10cf1fbfc9b34ce32d/latest/${currencyOneSelected}`)
        .then((response) => response.json())
        .then((data) => {
           
            const convartedTwo = (data.conversion_rates[currencyTwoSelected]).toFixed(5);
            valueTowElem.value = (convartedTwo * valueOneInput).toFixed(5);  

        })
        .catch((error) => console.log(error)); 
}
    

currencyOneElem.addEventListener('change', calculate);
valueOneElem.addEventListener('change', calculate);
currencyTwoElem.addEventListener('change', calculate);
valueTowElem.addEventListener('change', calculate);



calculate();