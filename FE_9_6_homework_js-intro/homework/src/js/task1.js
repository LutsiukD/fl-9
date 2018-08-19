const amount = parseFloat(prompt('Enter amount:', '0'));
const discount = parseFloat(prompt('Enter discount', '0'));
let output;
if(amount>0&&amount!=NaN&&amount!=undefined&&discount<100&&discount>=0&& discount!=NaN){
	var priceWithDiscount = amount-amount*(discount/100);
	var saved = amount - priceWithDiscount;
	output =`Price without discount: ${+amount.toFixed(2)} 
	\nDiscount: ${+discount.toFixed(2)}% 
    \nPrice with discount: ${+priceWithDiscount.toFixed(2)}
    \nSaved: ${+saved.toFixed(2)}
	`;  
}else{  
	output = 'Invalid data';  
}   
console.log(output);   




























// const amount=parseFloat(prompt('Enter amount of money','0'));
// const discount=parseFloat(prompt('Enter a number of discount','-1'));

// function priceWithDis() {
//     const result=amount-amount*discount/100;
//     return result.toFixed(2);
// }
// const saved=amount*discount/100;

// if(amount>0&&!isNaN(amount)&&discount>=0&&!isNaN(discount)&&discount<=100){
//     console.log('Price without discount:', amount,
//     '\nDiscount:',+discount,'%',
//     '\nPrice with discount:', +priceWithDis(),
//     '\nSaved:',+saved.toFixed(2));  
// }else {
//     console.log('Invalid data');
//}



