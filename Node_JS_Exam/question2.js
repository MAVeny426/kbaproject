const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

const employee=new Map();

function askCommand()
{
    console.log("Employee Details");
    console.log("Available commands:add,remove,search,update,summary,exit");
    rl.question("Enter a command:",function(command)
    {
        switch(command.trim().toLowerCase())
        {
            case 'add':
                addItemPrompt();
                break;
            case 'remove':
                removeItemPrompt();
                break;
            case 'search':
                searchItemPrompt();
                break;
            case 'update':
                updateItemPrompt();
                break;
            case 'summary':
                printSummary();
                askCommand();
                break;
            case 'exit':
                rl.close();
                break;
            default:
                console.log('Invalid command: enter a valid choice!');
                askCommand();
                break;  
        }
    });
}

function addItemPrompt()
{
    rl.question("Enter a employee id:",function(id)
    {
        rl.question("Enter a employee name:",function(name)
        {
            rl.question("Enter a employee department:",function(department)
            {
                rl.question("Enter a employee salary:",function(salary)
                {
                    addItem(id,name,department,parseInt(salary));
                    askCommand();
                });
            });
        });
    });
}

function addItem(id,name,department,salary){          
    if(employee.has(id)){
        console.log(`Error employee details with id ${id} already exists`);

    }else{
        employee.set(id,{name,department,salary});
        console.log(`Employee details with ID ${id} added to Employee!`)
        console.log(employee)
    }
}

function removeItemPrompt()
{
    rl.question("Enter a employee id:",function(id)
    {
        {
            removeItem(id);
            askCommand();
        }
    });
    
}

function removeItem(id)
{
    if(employee.has(id))
        employee.delete(id);
        console.log(`Employee deatils with ${id} removed!`);
        askCommand();
        
}

function searchItemPrompt()
{
    rl.question("Enter a Employee Id:",function(searchTerm)
    {
        searchItem(searchTerm)
        askCommand();
    })
}

function searchItem(searchTerm)
{
    const results=[];
    for(const [id,item] of employee)
    {
       if( id.includes(searchTerm)||item.name.includes(searchTerm)||item.department.includes(searchTerm)||item.salary.includes(searchTerm))
       {
        results.push({id,...item})
       }
    }
    if(results.length>0)
    {
        console.log(`Employee id details:`,results)
    }
    else
    {
      
        console.log(`Employee id ${id} not found!`);
    }
}

function updateItemPrompt()
{
    rl.question("Enter a employee id:",function(id)
    {
        rl.question("Enter employee name:",function(newName)
        {
            rl.question("Enter employee department:",function(newDepartment)
            {
                rl.question("Enter employee salary:",function(newSalary)
                {
                    updateItem(id,newName,newDepartment,parseInt(newSalary))
                    askCommand();
                });
            });
        });
    });
}

function updateItem(id,newName,newDepartment,newSalary)
{
    if(employee.has(id))
    {
        const item=employee.get(id)
        item.name = newName || item.name;
        item.department = newDepartment || item.department
        item.salary = newSalary || item.salary

        employee.set(id,item);
        console.log(employee);
    }
    else
    {
        console.log(`Employee details with ${id} not found!`)
    }
}

function printSummary(){
    if(employee.size>0){
        console.log(' Summary: ');
        for(const [id,item] of employee){
            console.log(`ID: ${id},Name: ${item.name}, Department: ${item.department}, salary${item.salary}`);
        }
        console.log(`summary:`);
    }else{
        console.log('No id found!')
    }
}
askCommand();