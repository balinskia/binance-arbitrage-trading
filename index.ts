import Pairs from './pairs';

function getCurrencies() {
    const c = {};
    Object.keys(Pairs).map(pair => {
        const pair1 = pair.substr(0,3);
        const pair2 = pair.substr(3,6);
        c[pair1] = true;
        c[pair2] = true;
    });
    return Object.keys(c);
}
//console.log(getCurrencies());


