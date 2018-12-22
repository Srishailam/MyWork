var data = [1,2,3,4,5,6];
function binary_search(A,T){
	var left = 0;
	var right = A.length-1;
	while(left<right){
		var mid = Math.floor((left+right)/2);
		if(A[mid]<T){
			left = mid+1;
		} else if(A[mid]>T){
			right = mid-1;
		}
		else{
			return 'found at index:'+mid;
		}
	}
	return 'Not found at any index:'+T;

}
binary_search(data,3);
//"found at index:2"
