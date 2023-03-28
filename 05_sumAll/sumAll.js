const sumAll = function(start, end) {
    if(typeof start!=="number"||typeof end!=="number")return 'ERROR';//return ERROR if the values are not number.
    
    if(start<0||end<0)return 'ERROR';//return ERROR if the numbers are negative numbers.
    let sum=0;
    if(start<end){
        for(;start<=end;start++)
        sum+=start;
    }
    else if(start>end){
        for(;start>=end;start--)
        sum+=start;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
