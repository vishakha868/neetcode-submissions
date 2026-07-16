class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) { 
        let l=0,r=1;
        let res=0;
        let max=0;
        while(r<prices.length){
         if(prices[l]<prices[r]){
            res = prices[r]-prices[l];
            max = Math.max(max,res);
         }
            else{
                l=r;
            }
         r++;
        }
        return max;
    }
}
