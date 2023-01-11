let palindrome = () => {
    let arr = ["car", "pop","racecar","bike","ada"];
    let output = [];
    for(let i=0;i<arr.length;i++){
    let isPalindrome = true;
    let word=arr[i];
    for(let j=0;j<word.length/2;j++){
        if(word.charAt(j)!=word.charAt(word.length-j-1)){
          isPalindrome=false;
        }
    }
      if(isPalindrome){
        output.push(arr[i]);
        }
    }
    return output;
}
console.log(palindrome());

//output: [ 'pop', 'racecar', 'ada' ]