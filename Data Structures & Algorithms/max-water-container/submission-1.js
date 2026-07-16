class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
    //    let r=heights.length-1,l=0;
    //    let max = 0;
    //    while(l<r){
    //    let area =  Math.min(heights[l],heights[r])*(r-l);
    //    max = Math.max(area,max);
    //    if(heights[l]<=heights[r]){
    //     l++;
    //    } 
    //    else{
    //     r--;
    //    }
    //    }
    let max =0;
    for(let i=0;i<heights.length-1;i++){
        for(let j=i+1;j<heights.length;j++){
            let area = Math.min(heights[i],heights[j])*(j-i);
            max = Math.max(area,max);
        }
    }
       return max;
    }
}