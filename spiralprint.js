function spriralPrint(m, n,a){
	var i,k=0,l=0,res=[];
	while(k<m && l<n){
		for(i=l;i<n;++i){
			res.push(a[k][i]);
		}
		k++;
		for(i=k;i<m;++i){
			res.push(a[i][n-1]);
		}
		n--;
		if(k<m){
			for(i=n-1;i>=l;--i){
				res.push(a[m-1][i]);
			}
			m--;
		}
		if(l<n){
			for(i=m-1;i>=k;--i){
				res.push(a[i][l]);
			}
			l++;
		}
	}
	return res;
}
spriralPrint(3,6,arr2d);
(18) [1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8, 9, 10, 11]
