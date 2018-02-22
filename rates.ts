// This function doubles rates.
//
// Ex: parseRates({BTCUSD: 0.5, BTCETH: 5 }) => { BTCUSD: 0.5, USDBTC: 2, BTCETH: 5, ETHBTC: 0.2 }

export default function parseRates(Pairs, Currencies) {
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
  return rates;
}