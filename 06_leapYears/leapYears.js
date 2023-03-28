const leapYears = function(year) {
    leapYes=false;
    return year%4===0 && (year%400===0||year%100!==0)
};


// Do not edit below this line
module.exports = leapYears;
