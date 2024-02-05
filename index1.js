const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
// Using the join() method, create a string that joins all elements of the colors array into a single string separated by commas.
//console.log(colors.join(','));
// Apply the splice() method to remove the second and third elements from the colors array and replace them with 'purple' and 'pink'.
//console.log(colors.splice(2,2,'purple','pink'));
//console.log(colors);
// Utilize the copyWithin() method to copy the elements from index 1 to index 3 within the colors array to index 0.
colors.copyWithin(0,1,3);
 console.log(colors);