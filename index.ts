import Pairs from './resources/pairs';
import Currencies from './resources/currencies';
import computeMaximumArbitrage from './triangular-arbitrage';

let rates = {};
for (var i = 0; i < Currencies.length; ++i) {
    for (var j = 0; j < Currencies.length; ++j) {
        let c1 = Currencies[i];
        let c2 = Currencies[j];
        if (Pairs[c1 + c2]) {
            const rate = parseFloat(Pairs[c1 + c2]);
            rates[c1 + c2] = rate;
            rates[c2 + c1] = 1 / rate;
        }
    }
}

computeMaximumArbitrage(rates, Currencies);