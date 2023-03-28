const repeatString = function(text, num) {
    if(num<0) return `ERROR`
    sumText="";
    while(num>0)
    {
        sumText+=text;
        num--;
    }
    return sumText;
};

// Do not edit below this line
module.exports = repeatString;
