
function sumArg(NumberArg) {
    return function(NumberArg2) {
        return NumberArg + NumberArg2;
    }
}
console.log(sumArg(3)(3));