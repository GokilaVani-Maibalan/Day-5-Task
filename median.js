// median of two concatenated arrays

(function (){
    let arr1 = [1,5,3,9,8,2];
    let arr2 = [7,6,4,12,-1,10];
    //sort two arrys
    let arr3 = arr1.concat(arr2).sort(function (a,b) {return a-b});
    
    let median;
    // find the midpoint of the array
    let midpoint = Math.floor(arr3.length/2);
    // if odd midpoint is median
    
    if (arr3.length%2!=0){
      median = arr3[midpoint];
    } 
    // if even arr[midpoint]+arr[midpoint-1]/2 (formula)
    else{
      median = (arr3[midpoint]+ arr3[midpoint-1])/2;
    }
    console.log(median);
  }) ();

  // output:5.5

  // median of two arrays
  let arr1 = [1,5,3,9,8,2];
  let arr2 = [7,6,4,12,-1,10];
  
  (function median(arr1,arr2){
    
    arr1.sort(function(a,b) {return a-b});
    arr2.sort(function(a,b) {return a-b});
  
    let median1;
    let median2;
    let midpoint1 = Math.floor(arr1.length/2);
    let midpoint2 = Math.floor(arr2.length/2);
    
    if(arr1.length%2!=0){
      median1 = midpoint1;
    } else {
      median1 = (arr1[midpoint1]+arr1[midpoint1-1])/2;
    }
    
    if(arr2.length%2!=0){
      median2 = midpoint2;
    } else{
      median2 = (arr2[midpoint2]+arr2[midpoint2-1])/2;
    }
    
    console.log(median1);
    console.log(median2);
  }) (arr1,arr2);

  // output 4
  //        6.5
  