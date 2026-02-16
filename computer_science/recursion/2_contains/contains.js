function isPlainObject(variable) {
  return typeof variable === 'object' && variable !== null && !Array.isArray(variable);
}

const contains = function(object,value) {
  for (const child in object) {
    const childVal = object[child]
    if(childVal === value || (Number.isNaN(childVal) && Number.isNaN(value))) return true;
    else if(isPlainObject(childVal) && contains(childVal,value)){
        return true
    }
  }
    return false;
};
  
// Do not edit below this line
module.exports = contains;
