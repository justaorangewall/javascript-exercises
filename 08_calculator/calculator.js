const add = function(a=0,b=0) {
	return a+b;
};

const subtract = function(a=0,b=0) {
	return a-b;
};

const sum = function(array) {
  total=0;
	return array.reduce((total,num)=> total=total+num,total=0);
};

const multiply = function(array) {
	return array.reduce((total,num)=> total=total*num,total=1);
};

const power = function(a,b) {
	powerStep=0;
  total=1;
  while(powerStep<b){total=total*a; powerStep++;}
  return total;
};

const factorial = function(num) {
	if(num===0)return 1;
  total=1;
  for(let i=1;i<=num;i++)total=total*i;
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
