class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let news =s.split(" ").join("").toLowerCase();
        news=news.replace(/[^a-zA-Z0-9]/g,'');
        let res= news.split('').reverse().join('');
        console.log(res)
        if(res== news){
            return true;
        }
      return false;
    }
}
