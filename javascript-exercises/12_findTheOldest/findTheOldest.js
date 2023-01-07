const findTheOldest = function(people) {
    let ans = people.map(person =>{
        if(person.yearOfDeath)
            return person.yearOfDeath - person.yearOfBirth;
        else
            return Number((new Date().getFullYear()) - person.yearOfBirth);
    })
    let max = ans[0];
    let p = 0;
    for (let i = 1; i < ans.length; i++) {
        if(max < ans[i]){
            p = i;
            max = ans[i];
        }
    }
    return people[p];
    
};
// Do not edit below this line
module.exports = findTheOldest;
