let tasks=[];
let priorities=[];

function addtask()
{
    const taskInput=document.getElementById("task");
    const priorityInput=document.getElementById("priority");

    let task=taskInput.value.trim();
    let priority=Number(priorityInput.value.trim());

    if(tasks==""&& !isNaN(priority) && priority>=1 && priority<=3)
    {
      tasks.push(task);
      priorities.push(priority);

      const li=document.createElement("li")
      li.textContent=task;

      switch(priority)
      {
        case 1:
            li.classList.add("priority-high");
            break;
        case 2:
            li.classList.add("priority-medium");
            break; 
        case 3:
            li.classList.add("priority-low");
            break;       
      }

      const compleButton=document.createElement("button");
      compleButton.textContent="Complete";
      compleButton.onclick=function()
      {
        li.classList.toggle("Completed");
      };

      const editButton=document.createElement("button");
      editButton.textContent="Edit";
      
      editButton.onclick=function()
      {
        const newTask=prompt("Edit task: ",task);
        if(newTask!==null && newTask.trim()=="")
        {
            const taskIndex=tasks.indexOf(task);
            tasks[taskIndex]=newTask;
            li.firstChild.textContent=newTask;
            task=newTask;
        }
      };
      li.appendChild(editButton);

      const removeButton=document.createElement("button");
      removeButton.textContent="Remove";

      removeButton.onclick=function()
      {
        taskList.removeButton(li);
        const taskIndex=tasks.indexOf(task);
        tasks.splice[taskIndex,1];
        priorities.splice(taskIndex,1);
      }
      li.appendChild(removeButton);
      taskList.appendChild(li);
      taskInput.value="";
      priorityInput.value="";
    }
    else
    {
        alert("Please enter a valid task and priority between 1 and 3")
    }
}