function findPeak(a, l, h){
	if(l>h){ return -1;}
	var mid = Math.floor((l+h)/2);
	if((mid==0 || a[mid-1]< a[mid]) && (mid==a.length-1 || a[mid]> a[mid+1])){ return mid;
	}
	if(a[mid]<a[mid+1]){ return findPeak(a,mid+1, h)} return findPeak(a,l, mid-1);
}
undefined
findPeak([1,2,3,4],0,4);
3
