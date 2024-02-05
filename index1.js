const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
// Using the join() method, create a string that joins all elements of the colors array into a single string separated by commas.
console.log(colors.join(','));
// Apply the splice() method to remove the second and third elements from the colors array and replace them with 'purple' and 'pink'.
console.log(colors.splice(2,2,'purple','pink'));
console.log(colors);
// Utilize the copyWithin() method to copy the elements from index 1 to index 3 within the colors array to index 0.
colors.copyWithin(0,1,3);
console.log(colors);
// Finally, transform all elements of the colors array to uppercase using the toUpperCase() method.

const uppercaseColors = colors.map(color => color.toUpperCase());

console.log(uppercaseColors);
// Apply the find() method to find the first element in the colors array that starts with the letter 'b'.
const startsWithB = colors.find(color => color.startsWith('b'));

console.log(startsWithB);

// Apply the slice() method to create a new array selectedColors containing the elements from index 1 to index 3 (inclusive) from the colors array.
console.log(colors.slice(1,4));





