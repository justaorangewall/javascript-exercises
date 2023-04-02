const findTheOldest = function(people) {
   return people.reduce((oldest,person)=>{
        console.log(oldest);
        current=getAge(person.yearOfBirth,person.yearOfDeath);//age of current element in the loop
        oldAge=getAge(oldest.yearOfBirth,oldest.yearOfDeath);//age of the oldest so far.
        
        return oldAge<current ?  person: oldest;
    }
    );
   
};

const getAge = function (birthyear, deathyear) {
    if(deathyear=='undefined')death=new Date().getFullYear();
    return deathyear-birthyear;
};
// Do not edit below this line
module.exports = findTheOldest;
