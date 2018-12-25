function Stack(){
  this.count = 0;
  this.storage = {};//[]
}
Stack.prototype.push = function(value){
  this.storage[this.count] = value;
  this.storage[this.count++]; //this.count++;
};
Stack.prototype.pop = function(){
  if(this.count==0){
    return undefined;
  }
  this.count--;
  var result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
};
var s = new Stack();
console.log(s);
s.push(2);
console.log(s);
s.push(3);
console.log(s);
s.pop();
console.log(s);
s.pop();
console.log(s);
s.pop();
console.log(s);
