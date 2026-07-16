class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        for(let i=0;i<nums.length;i++){
            if(nums.includes(target-nums[i])){
               const sec_ind = nums.indexOf(target-nums[i]);
               if(i !== sec_ind){
               return [i,sec_ind]
               }
            }

        }
        return [];
    }
}
