try{
    let result=riskyoperation(); // ode the might throw an error
    document.write(result)
}
catch (error){
    document.write("An error occured "+error.message); //code to handle the error
}
finally{
    document.write("This will always run"); //code that runs regardless of an error
}
function riskyoperation()
{
    let obj;
    obj.property; //this will throw an error
}