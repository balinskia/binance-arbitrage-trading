Let's assume we have BTC and we want to find a cycle which will
give us profit. 

Current prices of BTC, ETH, BNB (date 02.19.2018 22:23):

ETHBTC:  0.08416900
BNBETH:  0.01178700
BNBBTC:  0.00099240

This mean you can buy or sell:

1 ETH for 0.0841690 BTC
1 BNB for 0.0117870 ETH
1 BNB for 0.0009924 BTC


If we want to buy BNB for ETH, first by buying ETH for BTC, we get:
1 BNB = 0.0117870 ETH = 0.011787 * 0.0841690 BTC = 0.0009921 BTC

We can sell 1BNB for 0.009924 BTC, so our profit (without fees):
0.009924 - 0.0009921 = 0.000003 BTC

Fees = 0.015%
Total fee = 3 * (0.009924 * 0.015%) = 0.000005 BTC
So we can see that this trade is not profitable

It's software tries to find such pairs with maximum profit.
