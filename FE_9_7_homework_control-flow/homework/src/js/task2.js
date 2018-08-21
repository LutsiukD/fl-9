const gameTemplate = (maxNumber, attempt, totalPrize, currentPrize) => `
Enter a number from 0 to ${maxNumber}
Attempts left: ${attempt}
Total prize: ${totalPrize}
Possible prize on current attempt: ${currentPrize}`;

let maxNumber = 5;
let totalPrize = 0;
let currentPrize;
let prizeMax = 10;
const defaultMaxNum = 5;
const defaultPrizeMax = 10;

if(confirm('Do you want to play a game?')){

 playGame();

}else{
 alert('You did not become a millionaire, but can.');
}

function getRandomNumber(maxNumber) {
 return Math.floor(Math.random() * ++maxNumber);
}

function playGame(){
 let playAgain = false;	
 let magicNumber = Math.floor(getRandomNumber(maxNumber));
do{	

for(let attempt = 1;attempt<=3;attempt++){
    playAgain = false;
    let prizeArr = {
		1 : prizeMax,
		2 : prizeMax/2,
		3 : prizeMax/4
	}
currentPrize = Math.floor(prizeArr[attempt]);
let userNumber = prompt(gameTemplate(maxNumber,attempt,totalPrize,currentPrize));
    let compareNum = userNumber - magicNumber;
	if (compareNum === 0){ 
	totalPrize += Math.floor(prizeArr[attempt]);
		if(confirm(`Congratulation!   Your prize is: ${totalPrize} \n Do you want to continue?`)){
		maxNumber*=2;
		prizeMax*=3;
		playAgain =true;
        magicNumber = Math.floor(getRandomNumber(maxNumber));
        break;
		}else{
		playAgain=false;
		break;
		}
	}else if(userNumber===''||userNumber===null){
		playAgain=false;
		break;
	}		 	
}
	if(playAgain===false){
	alert(`Thank you for a game. Your prize is: ${totalPrize} `);
		if(confirm('Do you want to play again?')){
			playAgain=true;
			maxNumber=defaultMaxNum;
			totalPrize=0;
			currentPrize=0;
			prizeMax=defaultPrizeMax;
			magicNumber = Math.floor(getRandomNumber(maxNumber));
		}else{
			playAgain=false;
		}
	}	
	}while(playAgain===true)
}