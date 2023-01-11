let titleCaps = () => {
 
let str = ["gokila","guvi","learning"];
for(let i=0;i<str.length;i++){
  
   str[i]=str[i].charAt(0).toUpperCase()+
   str[i].substring(1,str[i].length);
   }
   return str;
} 
console.log(titleCaps()); 

//output: [ 'Gokila', 'Guvi', 'Learning' ]