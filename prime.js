(function (){
    let arr = [18,15,3,4,17,20,7,25,91];
    let output = [];
    // traverse over array
    for(let i=0;i<arr.length;i++){
    // 1 is neither prime nor composite
      if(arr[i]==1){
        continue;
      }
      // iterate j from 2 to number
      // if not divisible by anyother number it is prime
      let isPrime=true;
      for(let j=2;j<arr[i];j++){
        if(arr[i]%j==0){
            isPrime = false;
            break;
        }
       }
       if(isPrime){
         output.push(arr[i]);
       }
      }
 console.log(output);
}) ()

//output:[ 3, 17, 7 ]