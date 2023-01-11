let sum = () =>{
    let arr = [1,8,4,3,12,18,23,5];
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(sum())

//output: 74