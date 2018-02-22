
export default function computeMaximumArbitrage(rates, Currencies) {
  function abs(val) {
    return val < 0 ? -val : val;
  }

  function getNth(j, k, nth) {
    return [Currencies[j], Currencies[k]].sort()[nth - 1];
  }

  let per_max = 0;
  let pair_max = "";
  const c3 = 'BTC';

  for (var j = 0; j < Currencies.length; ++j) {
    for (var k = j + 1; k < Currencies.length; ++k) {
      const c1 = getNth(j, k, 1);
      const c2 = getNth(j, k, 2);
      if (rates[c1 + c2] && rates[c2 + c3] && rates[c1 + c3]) {
        let pair = c2 + c3 + " " + rates[c2 + c3] + "\n"
          + c1 + c2 + " " + rates[c1 + c2] + "\n"
          + c1 + c3 + " " + rates[c1 + c3] + "\n";
        let per_diff = rates[c1 + c2] * rates[c2 + c3] - rates[c1 + c3];
        if (abs(per_diff) > abs(per_max)) {
          per_max = per_diff;
          pair_max = pair;
        }
        /* console.log(c1 + c2 + " " + rates[c1 + c2]);
        console.log(c2 + c3 + " " + rates[c2 + c3]);
        console.log(c1 + c3 + " " + rates[c1 + c3]); */
      }
    }
  }
  console.log(pair_max);
  console.log(per_max);
}

