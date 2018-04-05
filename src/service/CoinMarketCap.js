import axios from 'axios';

var baseURL = null;

/** 
 * Exposes the CoinMarketCap API
 */
export default class CoinMarketCap{

    constructor(coinMarketCapbaseURL){
        baseURL = coinMarketCapbaseURL;
    }

    getAxios(axiosArg){
        return axios({
            ...axiosArg,
            baseURL
        });
    }

    retrieveCoinData(currencyName){
        return this.getAxios({
            method: 'get',
            url: 'ticker/' + currencyName
        })
    }
}