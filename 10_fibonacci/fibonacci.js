const fibonacci = function(num) {
    if(num<0)return 'OOPS';
    let fiboSum=0;
    if(num==0)return 0;
    if(num==1) return 1;
    fiboSum=fibonacci(num-1)+fibonacci(num-2);
    return fiboSum;
};

// Do not edit below this line
module.exports = fibonacci;