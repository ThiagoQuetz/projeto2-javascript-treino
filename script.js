const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras Moedas

    console.log(currencySelect.value)
    
    const dolarToDay = 4.95
    const euroToDay = 5.38
    const libraToDay = 6.27
    const bitcoinToDay = 308047.98
     

    if(currencySelect.value == "dolar"){ //Se o select estiver selecionado o valor do dolar entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US",{
            style: "currency",
            currency:"USD"
        }).format(inputCurrencyValue / dolarToDay)
    }

    if(currencySelect.value == "euro"){ //Se o select estiver selecionado o valor do euro entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency:"EUR"
        }).format(inputCurrencyValue / euroToDay) 

    }

    
    if(currencySelect.value == "libra"){ //se o select estiver selecionado o valor da libra entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency:"GBP"
        }).format(inputCurrencyValue / libraToDay)
    }

    if(currencySelect.value == "bitcoin"){ //se o select estiver selecionado o valor da bitcoin entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
            style: "currency",
            currency:"BTC"
        }).format(inputCurrencyValue / bitcoinToDay)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style: "currency",
        currency:"BRL"
    }).format(inputCurrencyValue)


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolár americano"
        currencyImage.src = "./assets/dolar.png"
    }

    
    if (currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src="./assets/euro.png"
    }

    if (currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src="./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin"){
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src="./assets/bitcoin.png"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)