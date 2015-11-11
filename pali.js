console.log(biggest3digitPalindrome());

function biggest3digitPalindrome(){
    var max=0;
    for (var i=999;i>100;i--)
        for (var j=999;j>100;j--)
            if (isPalindromic(i*j) && i*j>max){
                max=i*j;
            }
    return max;
}

function isPalindromic(a){
    a=""+a;
    var al= a.length;
    if (al===1) return true;
    for (var i= 0, j=al-1;i<Math.floor(al/2);i++,j--) {
        if (a[i]!==a[j]) return false;
    }
    return true;
}

