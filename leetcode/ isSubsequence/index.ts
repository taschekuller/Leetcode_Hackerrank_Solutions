function isSubsequence(s: string, t: string): boolean {
    let pointerS=0;
    for(let i=0; i<t.length; i++){
    if(s[pointerS] == t[i]){
        pointerS+=1;
    }
    }
    if(pointerS == s.length){
        return true
    }
    return false
};