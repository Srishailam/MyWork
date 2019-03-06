/*
We're going to write a function that accepts a string as input 
and returns an array containing all contiguous substrings.

input : "cat"
output : ["c", "a", "t", "ca", "at", "cat"]
output (option 2) : ["c", "ca", "cat", "a", "at", "t"]

things to point out:
- order of the array does not matter
- duplicates are not important. i.e. no need to de-dupe the list in the case of “caat”, for example
*/
function getContiguousSubstringsOfString_Option1(str){
    let result = [];
   for( let i=0;i<str.length;i++){
      result = result.concat(getSubstrings(str, i+1));
   }
    console.log(result)
    return result ;
  }
  function getSubstrings(str, size){
    let tempArray = [];
    for(let i=0;i<str.length; i++){
      let s = str.substr(i, size);
      if(s.length == size){
        tempArray.push(s);
      }
    }
    return tempArray;
  }
getContiguousSubstringsOfString_Option1('cater');
  // function getContiguousSubstringsOfString_Option1(str){
  //   let result = [];
  //   for( let i=0;i<str.length;i++){
  //         for( let j=i+1;j<=str.length;j++){
  //           result.push(str.substr(i,j));//number of chars from start position
  //         }
  //       }
  //   return result;
  // }
  function getContiguousSubstringsOfString_Option2(str){
   let result = [];
        for( let i=0;i<str.length;i++){
          for( let j=i+1;j<=str.length;j++){
            result.push(str.substring(i,j));// from and to index
          }
        }
            
    return result;
  }
  
  const input = 'cat';
  console.log(getContiguousSubstringsOfString_Option1(input));
  console.log(getContiguousSubstringsOfString_Option2(input));
