function userCard(index){
	let key = index,
	balance = 100,
	transactionLimit = 100,
	taxa = 0.005,
	transferLog = [];

	function historyTransferLog(amount,type){
		transferLog.push({
            operationType: type,
            credits: amount,
            operationTime: new Date().toLocaleString('en-GB')
        })
	}    

	return {
		getCardOptions() {
			return {balance, transactionLimit, transferLog, key};
		},

		putCredits(amount) {
			let type = 'Received credits';
            balance += amount;
            historyTransferLog(amount, type);
		},

		takeCredits(amount) {
			let type = 'Withdrawal of credits';
			if(amount <= balance&& amount <= transactionLimit){
				balance-= amount;
				historyTransferLog(amount, type);
			}else{
				console.log('You can not take this amount, check your balance and transaction limit!');
			}		
		},

		setTransactionLimit(amount) {
			let type = 'Transaction limit change';
			transactionLimit = amount;
			historyTransferLog(amount,type);
		},

		transferCredits(amount,card) {
			let taxedAmount = amount + amount*taxa;
			let type = `Credit transfer between cards`;
			if(taxedAmount <= balance && amount <= transactionLimit){
				this.takeCredits(taxedAmount);
				card.putCredits(amount);
			}else{
				console.log('Invalid amount! Check your balance and transaction limit.');
			}
		}
	};
}

class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.maxCards = 3;
  }

  addCard() {
    if (this.cards.length < this.maxCards) {
      this.cards.push(userCard(this.cards.length + 1));
    } else {
      console.log(`You can not have more than three cards!`);
    }
  }

  getCardByKey(key) {
    return this.cards[key - 1];
  }
}
