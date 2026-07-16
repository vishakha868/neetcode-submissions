class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length ===0){
            return '';
        }
        let size =[], res ="";
        for(let s of strs){
          size.push(s.length);
        }
        for(let s of size){
            res +=s+',';
        }
        res+='#';
        for(let s of strs){
            res += s;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
        if(str.length === 0){
            return [];
        }
        let i=0,sizes = [],res =[];
        while(str[i]!=='#'){
            let curr='';
            while(str[i]!==','){
                curr+=str[i];
                i++;
            }
            sizes.push(parseInt(curr));
            i++;
        }
        i++;
        for(let sz of sizes){
            res.push(str.substr(i,sz));
            i+=sz;
        }
        return res;
    }
}
