class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */

    groupAnagrams(strs) {
        let hashMap = {};
        
        for(let i=0;i<strs.length;i++){
            let sort = strs[i].split('').sort().join('');;
            if(!hashMap[sort]){
                hashMap[sort] = [];
            }
            hashMap[sort].push(strs[i]);
        
    }
return Object.values(hashMap);
}
}