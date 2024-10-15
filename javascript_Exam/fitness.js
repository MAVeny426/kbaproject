let activites=[];

function addActivity()
{
    let nameInput=document.getElementById("name");
    let intensityInput=document.getElementById("priority");
    let display=document.getElementById("display");

    
    if(nameInput!==""  && intensityInput!=="")
    {
        let li=document.createElement("li");
        nameInput=document.getElementById("name").value;
        let intensityInputdata=Number(intensityInput.value);
        
        switch (intensityInputdata) {
            case 1:
                li.classList.add('high');
                break;
            case 2:
                li.classList.add('medium');
                break;
            case 3:
                li.classList.add('low');
                break;
        }

        li.textContent=nameInput;
        display.appendChild(li);

        let completebutton=document.createElement("button");
        completebutton.textContent="Complete"
        li.appendChild(completebutton);
        completebutton.onclick=function()
        {
            li.classList.toggle('completed');   
        }
         
        let editbutton=document.createElement("button");
        editbutton.textContent="Edit";
        li.appendChild(editbutton)
        editbutton.onclick=function()
        {
            let newdata= prompt('Edit',nameInput);
            li.firstChild.textContent=newdata;
        }

        let removebutton=document.createElement("button");
        removebutton.textContent="Remove";
        li.appendChild(removebutton);
        removebutton.onclick=function()
        {
           display.removeChild(li) ;
        }

        // SaveTaskToLocalStorage()
        // {
           
        // }
        
        
   
    }
    // window.onload()
    // {
        
    // }
    
    
}