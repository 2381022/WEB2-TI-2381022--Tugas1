function birthdayCakeCandles(...candles : number[]){
    let tallestCandleAmmount = 0;
    let currentTallestCandleHeight = -1;
    for(let i = 0; i < candles.length; i++){
        if(currentTallestCandleHeight < candles[i]){
            tallestCandleAmmount = 1;
            currentTallestCandleHeight = candles[i];
        }else if(currentTallestCandleHeight == candles[i]){
            tallestCandleAmmount++;
        }
    }
    return tallestCandleAmmount;
}

console.log(birthdayCakeCandles(4,4,1,3))