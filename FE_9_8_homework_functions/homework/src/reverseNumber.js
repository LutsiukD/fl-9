function reverseNumber(number){
	let reverseTemplte = Math.abs(number).toString().split('').reverse();   
	
    return number>0? reverseTemplte.join(''): -reverseTemplte.join('');
}




