import Pairs from './resources/pairs';

// This files generates list of all currncies

function unique(array) {
  return array.filter(function (value, index, self) {
    return self.indexOf(value) === index;
  });
}

const notLength3Currencies =
  unique(
    ['USDT',
      ...Object.keys(Pairs)
        .filter(name => name.length != 6)
        .map(el => el.replace('BTC', ''))
        .map(el => el.replace('ETH', ''))
        .map(el => el.replace('BNB', ''))
        .map(el => el.replace('USDT', ''))]
  );
const length3Currencies =
  unique(
    [...Object.keys(Pairs)
      .filter(name => name.length == 6)
      .map(pair => pair.substr(0, 3)),
    ...Object.keys(Pairs)
      .filter(name => name.length == 6)
      .map(pair => pair.substr(3, 6))
    ]

  );
const currnecies = [...length3Currencies, ...notLength3Currencies].filter(x => x != "");

export default currnecies;