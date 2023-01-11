(function (k){
    let arr = [1,5,7,9,3];
      let temp=0;
      for(let i=0;i<k;i++){
        temp=arr.pop();
        arr.unshift(temp);
      }
      console.log(arr);
    
  })(3)