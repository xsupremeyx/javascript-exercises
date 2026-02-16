const permutations = function(array) {
    if(array.length === 0){
        return [[]];
    }
  
    let finalArray = [];
    for(let i = 0; i < array.length; i++){
        const current = array[i];
        const remaining = [
            ...array.slice(0,i),
            ...array.slice(i+1)
        ];
        const perms = permutations(remaining);
        for(const perm of perms){
            finalArray.push([current, ...perm]);
        }
    }
    return finalArray;
};
  
// Do not edit below this line
module.exports = permutations;
