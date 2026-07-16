class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(num, tar) {
      let l=0, r= num.length-1,arr=[];
      
      while(l<r){
        if(num[l]+num[r]=== tar){
            arr[0]=l+1;
            arr[1]=r+1;
            return arr;
        }
        else if(num[l]+num[r]>tar){
            r--;
        }
        else{
            l++;
        }
      }
    }
}
