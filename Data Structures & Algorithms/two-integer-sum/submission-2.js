class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
 let indices = nums.map((num, index) => index);
    
    // Sort indices based on corresponding values in nums array
    indices.sort((a, b) => nums[a] - nums[b]);
    
    let left = 0;
    let right = nums.length - 1;
    
    while (left < right) {
        let sum = nums[indices[left]] + nums[indices[right]];
        
        if (sum === target) {
            return [indices[left], indices[right]];
            }
            else if (sum<target){
                left++;
            }
            else{
                right--;
            }
        }
        return [];
    }
}
