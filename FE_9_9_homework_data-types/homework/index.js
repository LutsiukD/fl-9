const findType = param => typeof param;

const forEach = (arr,func) => {
	for(let i=0;i<arr.length;i++){
		func(arr[i]);
	}
}

const map = (arr,func) => {
	let transformArr =[];
	forEach(arr, element => transformArr.push(func(element)) )
	return transformArr;
}

const filter = (arr, func) => {
	let filteredArr=[];
	forEach(arr,element => { 
	if(func(element)){
	filteredArr.push(element); 
    } 
	})
	return filteredArr;
}

const getAdultAppleLovers = data => {
	return map(filter(data, param => param.age > 18 && param.favoriteFruit ==='apple'), filtered => filtered.name);  
}

const keys = obj => {
	let keys = [];
	for(let key in obj){
		if(obj.hasOwnProperty(key)){
			keys.push(key);
		}	
	}
	return keys;
}

const values = obj => {
	let values = [];
	for(let key in obj){
		if(obj.hasOwnProperty(key)){
			values.push(obj[key]);
		} 
	}
	return values;
}

 const showFormattedDate = date => {
   const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   return `It is ${date.getDate()} of ${monthName[date.getMonth()]}, ${date.getFullYear()}`;
 }
