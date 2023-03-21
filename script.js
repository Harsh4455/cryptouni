var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var usd = document.getElementById("usd");
var usdt = document.getElementById("tether");
var bnb = document.getElementById("bnb");
var ada = document.getElementById("cardano");
var matic = document.getElementById("polygon");
var xrp = document.getElementById("xrp");
var sol = document.getElementById("solana");
var dot = document.getElementById("palkadot");
var busd = document.getElementById("binance usd");
var shib = document.getElementById("shiba");
var trx = document.getElementById("tron");
var ltc = document.getElementById("litecoin");
var avax = document.getElementById("avalanche");



var settings = {
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Cusd%2Ctether%2Cbnb%2Ccardano%2Cpolygon%2C&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
$.ajax(settings).done(function(response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    usd.innerHTML = response.usd.usd;
    usdt.innerHTML = response.tether.usd;
    bnb.innerHTML = response.bnb.usd;
    ada.innerHTML = response.cardano.usd;
    matic.innerHTML = response.polygon.usd;
    xrp.innerHTML = response.xrp.usd;
    sol.innerHTML = response.solana.usd;
    dot.innerHTML = response.palkadot.usd;
    busd.innerHTML = response.binanceusd.usd;
    shid.innerHTML = response.shida.usd;
    trx.innerHTML = response.tron.usd;
    ltc.innerHTML = response.litecoin.usd;
    avax.innerHTML = response.avalanche.usd;
    
    
});