let button = document.querySelectorAll(".btn");
let input='';
Array.from(button).forEach( (item)=> { 
  item.addEventListener('click',(e)=>{
        if(e.target.innerText=='-' ||e.target.innerText=='+' ||e.target.innerText=='%' ||e.target.innerText=='/' ||e.target.innerText=='*'){
         if( input.charAt(input.length-1)=='-'||input.charAt(input.length-1)=='+' || input.charAt(input.length-1)=='*' || input.charAt(input.length-1)=='/' ||input.charAt(input.length-1)=='%')
        {
        document.getElementById("result").value= input; 
       }
       else {
     input += e.target.innerText;
     document.getElementById("result").value= input;
   }
    }
   
    else if(e.target.innerText=='='){
    input = eval(input);
    document.getElementById("result").value= input;
   }
   else if(e.target.innerText=='C'){
    input = "";
    document.getElementById("result").value= input;
   }
   else if(e.target.innerText=='DEL'){
    input = input.slice(0,-1);
    document.getElementById("result").value= input;
   }
   else {
     input += e.target.innerText;
     document.getElementById("result").value= input;
   }
  
    })
});