class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
       let result = [];
       let temp=[];
       if(nums.length===0){
        return 0;
       }
       if(nums.length===1){
        return 1;
       }
       nums.sort((a,b)=>(a-b));
       for(let i=0;i<nums.length;i++){
        if(nums[i+1]-nums[i]===1){
            if(!temp.includes(nums[i]))
            temp.push(nums[i]);
            if(!temp.includes(nums[i+1])){
                temp.push(nums[i+1]);
            }
        }
        else if(nums[i+1]-nums[i]===0){
            if(!temp.includes(nums[i])){
                temp.push(nums[i]);
            }
            continue;
        }
        else if(temp.length>0){
            const length = temp.length-1;
            result[length]=temp;
            temp=[];
        }
       }
return result.length;
    }
}
