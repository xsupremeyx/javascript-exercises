function isPlainObjectOrArr(variable) {
  return typeof variable === 'object' && variable !== null;
}

const totalIntegers = function(object) {
  let count  = 0;
  if(!isPlainObjectOrArr(object)){
    return;
  }
  for(const key in object){
    const val = object[key];
    if(Number.isSafeInteger(val)){
        count++;
    }
    else if(isPlainObjectOrArr(val)){
        count += totalIntegers(val);
    }
  }
  return count;
};


  


const contains = function(object,value) {
  
};

// Do not edit below this line
module.exports = totalIntegers;
