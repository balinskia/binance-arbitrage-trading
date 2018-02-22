// Data
import Pairs from './resources/pairs';
import Currencies from './resources/currencies';

// Functions
import computeMaximumArbitrage from './triangular-arbitrage';
import parseRates from './rates';

// Binance
import BinanceKeys from './binance-keys';
import * as Binance from './node_modules/node-binance-api/node-binance-api'

const DEBUG = true;
async function getPairs() {
    return new Promise(function (resolve) {
        if (DEBUG) {
            // Return currency pairs from file
            return resolve(Pairs);
        } else {
            // Return currency pairs from exchange
            Binance.options({
                APIKEY: BinanceKeys.APIKEY,
                APISECRET: BinanceKeys.APISECRET,
                useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
                test: true // If you want to use sandbox mode where orders are simulated
            });
            Binance.prices((error, ticker) => {
                resolve(ticker);
            });
        }
    })
}

(async function start() {
    const pairs = await getPairs();
    const rates = parseRates(pairs, Currencies);
    computeMaximumArbitrage(rates, Currencies);
})()
