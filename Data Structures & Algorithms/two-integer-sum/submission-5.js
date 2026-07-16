class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      let indices = nums.map((num,index)=>index);
      let l= 0, r= nums.length-1;
      indices.sort((a,b)=>(nums[a]-nums[b]));
      while(l<r){
        if(nums[indices[l]]+nums[indices[r]]===target){
            return [indices[l],indices[r]];
        }
        else if(nums[indices[l]]+nums[indices[r]]>target){
            r--;
        }
        else{
            l++;
        }
      }
    }
}
