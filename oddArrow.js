let odd = ()=>{
    let arr=[1,2,3,4,5,6,7,8,9,10];
     let oddNumbers = '';
     for(let i=0;i<arr.length;i++){
      
     if(arr[i]%2!=0)
     {   
        oddNumbers+=arr[i]+' ';
     }
     
  }
  return oddNumbers;
  }
  console.log(odd())

  //output: 1 3 5 7 9