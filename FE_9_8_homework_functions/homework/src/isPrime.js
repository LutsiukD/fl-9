function isPrime(number) {
    for(let i = 2; i < number; i++){
        if(number % i === 0) {
            return false;
        }
    }
    if(number === 1|| number === 0){
    return false;
    }else{
    return true;
    } 
}