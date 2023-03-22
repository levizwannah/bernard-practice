/**
 * all initialization, declaration, and integer and boolean checks take 
 * O(1)
 */

// example
let x = 5; // O(1)
x = x + 1;

if (x == 5) { // O(1)

}

let y; // O(1) -- 1 step

/**
 * now get Time complexity of a loop
 */

for(let i = 0; // o(1)
    i < 10; // check 10 times
    x++ // increment 10 times
    ){

    console.log(i); // O(1) -- 1 step
}
// O(n)

function a(){
    // O(n)
}

a() // O(n)

function b(){

    return a() + a() // O(n)
}

b() // O(n)

/**
 * i   | k = 10 (iteration count)
 * ----|----
 * 0     1
 * 1     2
 * 2     3
 * 3     4
 * 4     5
 * 5     6
 * 6     7
 * 7     8
 * 8     9
 * 9     10
 * 10    X
 * O(n)
 */

/**
 * Inner loop
 */
for (let i = 0; i < n; i++){ // O(n)

    for(let j = 0; j < n; j++){ // O(n)

        let m = 1; // O(1)

    }

}

// n = 5
// i = 1 j x 5
// i = 2 j x 5
// ...
// i = 5 j x 5

// O(n^2)

// 3 nested loops will give O(n^3)

/**
 * Example 2. Logarithmic 
 */

for(let i = 16; i >= 1; i /= 2){ 
    a(); // O(n);
}

/**
 * Let's calculate
 * k (iteration count) | i     stop when i < 1
 * k | i
 * 0 | 16
 * 1 | 8
 * 2 | 4
 * 3 | 2
 * 4 | 1
 * 5 | X
 * 
 * (i = 16)
 * 1. (i / 2) = 8
 * 2. (i / 2) / 2 = 4
 * 3. i / 2 / 2 / 2 = 2
 * 4. i / 2 / 2 / 2 / 2 = 1
 * 5. x
 * 
 * n/2^k = 1
 * 
 * n
 * - = 1
 * 2^k
 * 
 * n = 2^k
 * log (2) n
 * 
 * O(logN)
 */

for(let n = 16; n >= 1; n /= 2){ // O(log N)

    a(); // O(n)

}

/**
 * Therefore the time complexity of the above is
 * O(N log N)
 */

/**
 * Example 4
 * Multiple time complexities
 */

for(let i = 0; i < n; i++){ // O(n)

    let x = 5; // O(1)

    let y = binarySearch(); // O(log N)
}

/**
 * Loop body takes O(N *  (O(1) + O(log N)) )
 * O(N) + O(N log N) -- take the greatest
 * Final time complexity = O(N log N)
 */

/**
 * Example 5
 * Multiple time complexities
 */
for(let n = 32; n >= 1; n /= 3){ // O(log N)

    let x = nestedLoop(); // O(n^2)
    let y = binarySearch(); // O(log N)
    let x = a(); // O(n);
    let b = a(); // O(n)

}

/**
 * Total complexity in the loop body is:
 * O(n^2) + O(log N) + O(n) + O(n) -- take greatest O(n^2)
 * Therefore final complexity = O(log N) * O(n^2) == O (n^2 log N)
 */

/**
 * @todo calculate the time complexity of this function
 * @param {int} n 
 * @returns 
 */
function  factorial(n){
    let fact = 1;
    
    for (let i = 1; i <= n; i++){
        fact *= i;
    }

    return f;
}

factorial(10) // O(?)