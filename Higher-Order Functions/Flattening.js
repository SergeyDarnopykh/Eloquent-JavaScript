// Flattening

// Use the reduce method in combination with the concat method to “flatten” an array 
// of arrays into a single array that has all the elements of the input arrays.

array.reduce((a, b) => {
    return a.concat(b);
});