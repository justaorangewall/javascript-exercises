const palindromes = function (word) {
    let reverseOGword="";
    word=word.toLowerCase();

    let array=word.split(""); 
    array=array.filter((char) => {
        charUpper=char.toUpperCase();
        if(charUpper.toLowerCase()!==charUpper)
        {return 1;}
    })
    comparisonWord=array.join("");
    index=0;
    while(index<comparisonWord.length){
        reverseOGword=`${comparisonWord.charAt(index)}${reverseOGword}`;
        index++;
    }

    return reverseOGword===comparisonWord;
    
};

// Do not edit below this line
module.exports = palindromes;
