class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }
     let arr=s.split("");
     for(let i =0;i<arr.length;i++){
        if(t.indexOf(arr[i])==-1){
            return false;
        }
        else{
            const index = t.indexOf(arr[i]);
            t=t.replace(arr[i],'');
        }
     }
     return true;
    }
}
