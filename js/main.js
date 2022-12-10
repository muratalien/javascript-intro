function SumArr(array){
    let sum = 0

    for(let i of array){
        if(i % 2 == 0){
            sum += i
        }
    }
    return sum
}

let arr = [12,34,45,57,67]

SumArr(arr)

let a = SumArr(arr)

console.log(a)

console.log("------------------------------")

function SumBig(arr){
    let sum1 = 0

    for(let i=0; i < arr.length; i++ ){
        if(arr[i] > sum1){
            sum1 = big[i]
        }
    }
    return sum1
}

let big = [101,34,51,80,63]

SumBig(arr)

let b = SumBig(arr)

console.log(b)

console.log("------------------------------")

limit = 8000;
say = 0;

for(let i = 1; i <= limit; i++){
    if(i % 2 == 0){
        say = say + i;
    }
}
console.log(say);

console.log("------------------------------")

do{
    var first = prompt("Reqemi daxil edin:")    
}
while(isNaN(first))


do{
    var numm = prompt("Quvveti daxil edin:")    
}
while(isNaN(numm))

console.log(Math.pow(first,numm))

console.log("------------------------------")
