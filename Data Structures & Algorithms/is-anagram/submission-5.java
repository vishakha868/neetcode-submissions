class Solution {
    public boolean isAnagram(String s, String t) {
      Hashtable <Character,Integer> s1 = new Hashtable<>();
      Hashtable <Character,Integer> s2 = new Hashtable<>();
      for(int i=0;i<s.length();i++){
        s1.put(s.charAt(i),s1.getOrDefault(s.charAt(i),0)+1);
      }
      for(int i=0;i<t.length();i++){
        s2.put(t.charAt(i),s2.getOrDefault(t.charAt(i),0)+1);
      }
      return s1.equals(s2);
    }
}
