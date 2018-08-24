function getClosestToZero(){
	let closestNum = arguments[0];
	for(let i=0;i<arguments.length; i++){
		if(Math.abs(arguments[i])<Math.abs(closestNum)){
			closestNum = arguments[i];
		}
	}
	return closestNum;
}

