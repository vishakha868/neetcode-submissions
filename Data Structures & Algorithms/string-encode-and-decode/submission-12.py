class Solution:

    def encode(self, strs: List[str]) -> str:
        encodeStr = ""
        for s in strs:
            encodeStr = encodeStr + str(len(s))+ '#'+ s
        return encodeStr


    def decode(self, s: str) -> list[str]:
        arr = []
        i=0
        j=''
        while(i<len(s)):
            if(s[i]!='#'):
              j+=s[i]
              i+=1
            else:
                arr.append(s[i+1:int(j)+i+1])
                i=i+int(j)+1
                j = ''
        return arr