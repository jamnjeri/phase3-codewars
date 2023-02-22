function squareDigits(num){
    //Split number into digits
    let digits = (""+num).split("");
    
    //Square each number in the Array
    digits = digits.map((digit) => {
        return (digit * digit).toString();
    })
    
    //Join array
    const  x = +digits.join("");
    
    return x;
}