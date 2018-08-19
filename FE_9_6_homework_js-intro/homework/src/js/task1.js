const amount = parseFloat(prompt('Enter amount:', '0'));
const discount = parseFloat(prompt('Enter discount', '0'));
let output;
if(amount>0&&!isNaN(amount)&&amount!==undefined&&discount<100&&discount>=0&&!isNaN(discount)){
	let priceWithDiscount = amount-amount*(discount/100);
	let saved = amount - priceWithDiscount;
	output =`Price without discount: ${+amount.toFixed(2)} 
	\nDiscount: ${+discount.toFixed(2)}% 
    \nPrice with discount: ${+priceWithDiscount.toFixed(2)}
    \nSaved: ${+saved.toFixed(2)}
	`;  
}else{  
	output = 'Invalid data';  
}   
console.log(output);   
