// Slice and Splice
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.



function frankenSplice(arr1, arr2, n) {
let first = arr2.slice(0,n);
let len = arr2.length;
let second = arr2.slice(n,len);
let newArray =[];

newArray.splice(0,0,...first);
newArray.splice(n,0,...arr1,...second)

console.log(newArray);
return newArray ;
}