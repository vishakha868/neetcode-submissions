class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        let hashMap = [];
        // let arrayLost
        for(let i=0;i<nums.length;i++){
          hashMap[nums[i]]= (hashMap[nums[i]]|| 0) + 1;
          console.log(hashMap[nums[i]], nums[i]);
          if(hashMap[nums[i]]>1){
            return true;
          }
        }
        return false;
    }
}
