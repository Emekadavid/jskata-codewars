/* In this kata you will create a function that takes a list of non-negative 
integers and strings and returns a new list with the strings filtered out. 
examples:
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

function filter_list(l) {
  // create the result array
  let result = [];
  // iterate through each element in the input array
  for (let i = 0; i < l.length; i++) {
  // check if the element is a number
  if (typeof l[i] === 'number') {
    // if it is a number, add it to the result array
    result.push(l[i]);
    }
  }
  return result;
}

