const removeFromArray = function(originalArray,...removal) {
    lengofOG=originalArray.length;
    lengOfRemoval=removal.length;
    newArray=[];
    for(let index=0;index<lengofOG;index++){ //iterate through original array
        let foundDupe=false;
        for(let newArI=0;newArI<lengOfRemoval;newArI++){//compare each original element to element to be removed and flag if found.
            
            
            if(originalArray[index]===removal[newArI])foundDupe=true;
            
        }
        if(foundDupe==false)newArray.push(originalArray[index]);//only push into new array if it's not meant to be removed.
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
