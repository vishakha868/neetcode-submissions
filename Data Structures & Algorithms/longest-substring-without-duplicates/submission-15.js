class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if(s.length === 0){
            return 0;
        }
        let str=s[0];
        let maxL =str.length,l=0,r=1;
        while(r<s.length){
          if(!str.includes(s[r])){
            str+=s[r];
            maxL= Math.max(maxL,str.length);
            r++;
          }
          else{
            l++;
            str=s[l];
            r=l+1;
            console.log(s[r])
          }
          console.log(str)
        }
        
        return maxL;
    }
}
