// Your code goes here
const sideA = parseFloat(prompt("Enter side A: ", "0"));
const sideB = parseFloat(prompt("Enter side B: ", "0"));
const angle = parseFloat(prompt("Enter angle: ", "0"));
let output;
const maxAngle = 180;
const degree=Math.PI/maxAngle*angle;

function validateInput(number) {
    return isNaN(number) || typeof number !== 'number' || number < 0 ||angle>maxAngle;
}

function findSideC(){
    let result=Math.pow(sideA,2)+Math.pow(sideB,2)-2*sideA*sideB*Math.cos(degree);
    return Math.sqrt(result);
}

if( validateInput(sideA)||validateInput(sideB)||validateInput(angle)){
	output = 'Invalid data';
	
}else{
    let sideC=findSideC();
    const perimeter=sideA+sideB+sideC;
    const square=1 / 2 * sideA * sideB * Math.sin(degree);
    output = `c length: ${+sideC.toFixed(2)}
    \nTriangle square:${+square.toFixed(2)}
    \nTriangle perimeter:${+perimeter.toFixed(2)} 
    `
}
console.log(output);




