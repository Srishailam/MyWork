function findSumTwo(input, target){
var inputMap = new Map();

for(var i=0;i<input.length;i++){

	if(inputMap.has(target-input[i])){
		return [inputMap.get(target-input[i]),i]
	} else{
		inputMap.set(input[i],i);
	}
}

}

findSumTwo([1,2,3,4,6,7,9,12,14],9);
(2) [2, 4]
