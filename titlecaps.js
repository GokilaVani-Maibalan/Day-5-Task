// Convert all strings to title caps in a string array

(function (){
    // change strings to title caps(camelcase)
 
let str = ["gokila","guvi","learning"];
for(let i=0;i<str.length;i++){
  
  //change first letter to uppercase
   str[i]=str[i].charAt(0).toUpperCase()+
   // extract the string & concatenate 
   str[i].substring(1,str[i].length);
   }
   console.log(str);
}) (); 

//output: [ 'Gokila', 'Guvi', 'Learning' ]
