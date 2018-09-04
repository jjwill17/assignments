// Write a recursive function that takes two integers, n and counter as parameters and does the following:
//     If the n is divisible by three, divide it by three and call the function again, providing the new value as n and counter + 1 as counter
//     If not, either add or subtract 1 to a get a new value that is divisible by three and repeat step 1.
//     If n is one, simply return the value counter.

const myFunction = (n, counter) => {
    if(n % 3 === 0){
        return myFunction(n/3, counter + 1)
    } else if ((n + 1) % 3 === 0){
        return myFunction(n + 1, counter)
    } else if ((n - 1) % 3 === 0){
        return myFunction(n - 1, counter)
    } else {
        return counter
    }
}

myFunction(100, 0)