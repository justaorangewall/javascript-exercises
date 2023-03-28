const reverseString = function(text) {
    reversedText=""
    charCount=-1;
    while(reversedText.length<text.length){
        reversedText+=text.substr(charCount,1);
        charCount--;
    }
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
