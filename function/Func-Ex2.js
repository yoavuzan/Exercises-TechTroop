function isEven(num){
    return num % 2 === 0;
}

function printOnlyEven(arr){
    for(const num of arr){
        if(isEven(num)){
            console.log(num);
        }
    }
}