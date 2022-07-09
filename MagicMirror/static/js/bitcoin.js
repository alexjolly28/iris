var bitcoin = "";
var etherium = "";
var ripple = "";
var litecoin = "";
var monero = "";

// var counter = 0;
var flag = 0
if(flag == 0){
    flag = 1;
    fetch('https://api.cryptonator.com/api/ticker/btc-usd').then(response => {return response.json()}).then(data => {bitcoin=Number(data.ticker.price);document.getElementById('BTC').innerHTML=bitcoin.toFixed(3);})
    fetch('https://api.cryptonator.com/api/ticker/eth-usd').then(response => {return response.json()}).then(data => {etherium=Number(data.ticker.price);document.getElementById('ETH').innerHTML=etherium.toFixed(3);})
    fetch('https://api.cryptonator.com/api/ticker/xrp-usd').then(response => {return response.json()}).then(data => {ripple=Number(data.ticker.price);document.getElementById('XRP').innerHTML=ripple.toFixed(3);})
    fetch('https://api.cryptonator.com/api/ticker/ltc-usd').then(response => {return response.json()}).then(data => {litecoin=Number(data.ticker.price);document.getElementById('LTC').innerHTML=litecoin.toFixed(3);})
    fetch('https://api.cryptonator.com/api/ticker/xmr-usd').then(response => {return response.json()}).then(data => {monero=Number(data.ticker.price);document.getElementById('XMR').innerHTML=monero.toFixed(3);})
}
else{
var intervalID = window.setInterval(getValue, 30000)

function getValue(){
    fetch('https://api.cryptonator.com/api/ticker/btc-usd').then(response => {return response.json()}).then(data => {bitcoin=Number(data.ticker.price);document.getElementById('BTC').innerHTML=bitcoin.toFixed(3);})
    fetch('https://api.cryptonator.com/api/ticker/eth-usd').then(response => {return response.json()}).then(data => {etherium=Number(data.ticker.price);document.getElementById('ETH').innerHTML=etherium.toFixed(3);})
    fetch('https://api.cryptonator.com/api/ticker/xrp-usd').then(response => {return response.json()}).then(data => {ripple=Number(data.ticker.price);document.getElementById('XRP').innerHTML=ripple.toFixed(3);})
    fetch('https://api.cryptonator.com/api/ticker/ltc-usd').then(response => {return response.json()}).then(data => {litecoin=Number(data.ticker.price);document.getElementById('LTC').innerHTML=litecoin.toFixed(3);})
    fetch('https://api.cryptonator.com/api/ticker/xmr-usd').then(response => {return response.json()}).then(data => {monero=Number(data.ticker.price);document.getElementById('XMR').innerHTML=monero.toFixed(3);})
    // counter = counter+1;
    // console.log("updated:", counter);
}

}