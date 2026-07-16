class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(heights) {
        let l =0, r=heights.length-1;
        let res = 0;
        let leftmax=0,rightmax=0;
        while(l<r){
            if(heights[l]<heights[r]){
                if(heights[l]>=leftmax){
                    leftmax = heights[l];
                }
                else{
                    res+=leftmax -heights[l];
                }
                l++;
            }
            else{
                if(heights[r]>=rightmax){
                    rightmax= heights[r];
                }
                else{
                    res+=rightmax-heights[r];
                }
                r--;
            }
        }
        return res;
    }
}