function checkage(age)
{
    if(age<18)
    {
        throw new Error("You must be 18 years of older")
    }    
        else
        {
           console.log("You are allowed")
        }
}

try
   {
    checkage(16);
   }
catch(error)
     {
        console.log("Error is "+error.message);
     }   
finally
     {
        console.log("This always executes");
     }     