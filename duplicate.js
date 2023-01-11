(function (){
    let arr = [1,3,7,9,2,4,6,8,3,1,9];
    // remove duplicate elements
    let output=[];
    // duplicates
    let duplicate=[];

    for(let i=0;i<arr.length;i++){
      // if index of element in arr is -1 in output include the element in output array
        if(output.indexOf(arr[i])=== -1){
          output.push(arr[i]);
          }
          
       // to find duplicates
          else{
          duplicate.push(arr[i]);
          }
         }
    console.log(output);
    console.log(duplicate);
  })();

  //output: [1, 3, 7, 9,2, 4, 6, 8]
  //          [ 3, 1, 9 ] 