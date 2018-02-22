// Data
import Pairs from './resources/pairs';
import Currencies from './resources/currencies';

// Functions
import computeMaximumArbitrage from './triangular-arbitrage';
import parseRates from './rates';

const rates = parseRates(Pairs, Currencies);
computeMaximumArbitrage(rates, Currencies);