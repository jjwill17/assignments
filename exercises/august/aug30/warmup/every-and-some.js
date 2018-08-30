// Write two functions that mimic the .every and .some array methods.

// some
const some = (arr, func) => {
    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            return true;
        } 
    }
    return false;
}

console.log(some(["ben", "jacob", "bob"], (name)=>{
    return name === "jacob";
}));
// every
const every = (arr, func) => {
    for(let i = 0; i < arr.length; i++){
        if(!func(arr[i])){
            return false;
        } 
    }
    return true;
}

console.log(every(["jacob", "jacob", "jacob"], (name)=>{
    return name === "jacob";
}));