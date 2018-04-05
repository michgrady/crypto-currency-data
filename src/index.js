import CoinMarketCap from './service/CoinMarketCap';
import CurrencyFormatter from 'currency-formatter';

// Get crypto-currency name from environment
let cryptoName = process.env.CRYPTO_NAME?process.env.CRYPTO_NAME:'';
if (cryptoName === ''){
    console.log("Error: CRYPTO_NAME argument required \n" +
        "Example usage: \n" +
        "  docker run -e CRYPTO_NAME='bitcoin' crypto:latest");
    process.exit();
}

// Call CoinMarketCap API and log Price and Market Cap to console 
let baseURL = process.env.COIN_MARKET_CAP_API?process.env.COIN_MARKET_CAP_API:"https://api.coinmarketcap.com/v1/"
let client = new CoinMarketCap(baseURL);
client.retrieveCoinData(cryptoName).then(function (response){
    let data = response.data;
    if (data !== null && data instanceof Array && data.length == 1){
        let coinData = data[0];
        let name = coinData.name;
        console.log(name + " Price: " + CurrencyFormatter.format(coinData.price_usd, { code: 'USD' }) );    
        console.log(name + " Market Cap: " + CurrencyFormatter.format(coinData.market_cap_usd, { code: 'USD' }));
    }else{
        console.log("Response was not expected format");
    }        
}).catch(function(error){
   if (error.response.status === 404) {
        console.log("Crypto-currency '" + cryptoName + "' not found");
    } else {
        console.log(error);
    }
});



