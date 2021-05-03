// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.


function chunkArrayInGroups(arr, size) {
  let newArray = []
  for (let i =0; i<(arr.length);){
    let x = arr.slice(i,i+size);
    newArray.push(x);
    i += size;
  }
  console.log(newArray)
  return newArray;
}
