const searchBar = document.querySelector('#search-bar')
const stockTitle = document.querySelector('h4')
const symbol = document.querySelector('#symbol')
const price = document.querySelector('#price')
const results = document.querySelector('#results')

function updateStock(stockSymbol){
    const stockObject = getStockQuote(stockSymbol)
    stockTitle.innerHTML = stockObject.name
    symbol.innerHTML = stockSymbol
    price.innerHTML = "$" + stockObject.price
}

let intvl
function clickOption(stockSymbol){
    clearInterval(intvl)
    results.innerHTML = ''
    updateStock(stockSymbol)
    intvl = setInterval(()=> {
        updateStock(stockSymbol)
    },2000)
}

function showOptions(stockSymbol){
    const newDiv = document.createElement('div')
    const stockObject = quotes[stockSymbol]
    newDiv.innerHTML = `${stockSymbol} <span class="result-name">${stockObject.name}</span>`
    newDiv.addEventListener('click',()=>clickOption(stockSymbol))
    results.appendChild(newDiv)
}

function searchStocks(){
    setTimeout(()=>{
        results.innerHTML = ''
        const userText = this.value.toLowerCase()
        if(!userText){
            return
        }
        Object.keys(quotes).forEach(symbol => {
            const stockName = quotes[symbol].name
            if(userText.length > symbol.length){
                if(userText.length > stockName.length){
                    return
                }
                else{
                    if(userText == stockName.slice(0,userText.length).toLowerCase()){
                        showOptions(symbol)
                    }
                }
            }
            else if(userText == symbol.slice(0,userText.length).toLowerCase()){
                showOptions(symbol)
            }
            else if(userText.length <= stockName.length){
                if(userText == stockName.slice(0,userText.length).toLowerCase()){
                    showOptions(symbol)
                }
            }
            return
        })
    },100)
}

searchBar.addEventListener('keydown',searchStocks)