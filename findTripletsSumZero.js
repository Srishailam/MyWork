function findTripletsSumZero(data){
	for(var i=0;i<data.length-2;i++){
		var nmap = new Map();
		for(var j=i+1;j<data.length-1;j++){
			if(nmap.has(-(data[i]+data[j]))){
				console.log(data[i],data[j],(-(data[i]+data[j])));
			} else{
				nmap.set(data[j],j);
			}
		}
	}
}
findTripletsSumZero([-1, 0, 1, 2, -1, -4]);
 -1 1 -0
 -1 -1 2
 0 -1 1
