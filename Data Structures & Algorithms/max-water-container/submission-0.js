class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
       let r=heights.length-1,l=0;
       let max = 0;
       while(l<r){
       let area =  Math.min(heights[l],heights[r])*(r-l);
       max = Math.max(area,max);
       if(heights[l]<=heights[r]){
        l++;
       } 
       else{
        r--;
       }
       }
       return max;
    }
}