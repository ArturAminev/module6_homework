
function isPrime (number){
  if (number < 1000){
    for(i = 2; i <= number; i++){
      if(number % i === 0){
        console.log(`${number} - не простое число`);
      break
      }else{
        console.log(`${number} - простое число`);
      break
      }
    }
   }else{
    console.log("данные не верны");
  }
}
isPrime(1004)