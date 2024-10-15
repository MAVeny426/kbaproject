const readline=require('readline');
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
const inventory=new Map();
function askCommand()
{
    console.log('Welcome to inventory management system');
    console.log('Available commands:add,remove ,search,update,summary,exit');
    rl.question('\Enter a command ',function(command)
{
    switch(command.trim().toLowerCase())
    {
        case 'add':
            addItemPrompt();
            break;
        case 'remove':
            removeItemPrompt()
            break;
        case 'search':
            searchItemPrompt()    
            break;
        case 'update':
            updateItemPrompt();
            break;
        case 'summary':
            printsummary();
            askCommand(); 
            break;          
        case 'exit':
            ri.close();
            break;
        default:
            console.log('Invalid command :enter a valid command')
            askCommand();
            break;
    }
   });
}

//function to add an item
function addItemPrompt()
{
    rl.question("Enter an item ID:",function(id)
    {
        rl.question("Enter an item name:",function(name)
        {
            rl.question("Enter item category:",function(category)
            {
                rl.question("Enter item quantity:",function(quantity)
                {
                    addItem(id,name,category,parseInt(quantity));
                    askCommand();
                });
            });
        });
    });
}
function addItem(id,name,category,quantity)
{
    if(inventory.has(id))    //inventory il id undonn nokkan vendi has upayogikkunnu
    {
        console.log(`Enter item with id ${id} already exists`);
    }
    else
    {
        inventory.set(id,{name,category,quantity});
        console.log(`Item with ID ${id} added to inventory`)
    }
}
function removeItemPrompt()
{
    rl.question("Enter an id to remove: ",function(id)
    {
        removeItem(id);
        askCommand();
    })
}
function removeItem(id)
{
    if(inventory.has(id))
    {
        inventory.delete(id);
        console.log(`Item with ID ${id} removed`);
    }
    else
    {
        console.log(`Error: No item with ID ${id} found`);
    }
}
function searchItemPrompt()
{
    rl.question("Enter search term: ",function(searchTerm)
    {
        searchItem(searchTerm);
        askCommand();
    });
}
function searchItem(searchTerm)
{
    const results=[];
    for(const[id,item] of inventory)
    {
        if(id.includes(searchTerm)||item.name.includes(searchTerm)||item.category.includes(searchTerm)||item.quantity.includes(searchTerm))
        {
            results.push({id,...item});
        }    
    }
    if(results.length>0)
    {
        console.log("Search item ",results);
    }
    else
    {
        console.log("No items found! ");
    }
}
function updateItemPrompt()
{
    rl.question("Enter an item ID:",function(id)
    {
        rl.question("Enter an item name:",function(newname)
        {
            rl.question("Enter item category:",function(newcategory)
            {
                rl.question("Enter item quantity:",function(newquantity)
                {
                    updateItem(id,newname,newcategory,newquantity? parseInt(newquantity): undefined);
                    askCommand();
                });
            });
        });
    });
}
function updateItem(id,newname,newcategory,newquantity)
{
    if(inventory.has(id))
    {
        const item=inventory.get(id);
        item.name=newname || item.name;
        item.category=newcategory || item.category;
        item.quantity=newquantity !== undefined?newquantity:item.quantity;
        inventory.set(id,item);
        console.log(`Item with ID ${id} updated!`);
    }
    else
    {
        console.log(`Item with ID ${id} not found!`);
    }
}
function printsummary()
{
    if(inventory.size>0)
    {
        console.log('Inventory Summary :');
        for(const[id,item] of inventory)
        {
            console.log(`ID: ${id},Name: ${item.name},Category: ${item.category},Quantity: ${item.quantity}`);
        }   
    }
    else
        {
            console.log('No items found!');
        }
}
askCommand();