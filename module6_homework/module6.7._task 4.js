
function promptNumber(a,b){
  let current = a;
  const intervalId = setInterval(function(){
    console.log(current);
    if (current == b){
      clearInterval(intervalId);
    }else{
       current ++;                        
    }
    },1000);
}

promptNumber(6,18);