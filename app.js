var y = Math.floor(Math.random() * 100+1); 
      
    // counting the number of guesses 
    // made for correct Guess 
    var guess = 1; 
      
    document.getElementById("guess").onclick = function(){ 
      
   // number guessed by user      
   var x = document.getElementById("input").value; 
  
   if(x == y) 
   {     
       alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
               + guess + " GUESS "); 
} 
else if(x > y) /* if guessed number is greater 
           than actual number*/ 
{     
guess++; 
alert("OOPS SORRY!! TRY A SMALLER NUMBER"); 
} 
else
{ 
guess++; 
alert("OOPS SORRY!! TRY A GREATER NUMBER") 
} 
} 