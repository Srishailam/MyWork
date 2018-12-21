function findFirstMissing(data, start, end){

if(start>end){ return end+1;}
if(start != data[start]){ return start;}
var mid = Math.floor((start + end) / 2); 
 if (data[mid] == mid){ return findFirstMissing(data, mid+1, end);} 
  
  return findFirstMissing(data, start, mid);
}
var data = [0, 1, 2, 3, 4, 5, 6, 7, 10];
findFirstMissing(data, 0, data.length);
//8
