// app.js
let expenses = [];

// Function to render expenses
function renderExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.textContent = `${expense.description} - $${expense.amount} - ${getCategoryName(expense.category)}`;
        
        // Create Edit Button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editExpense(index);
        li.appendChild(editButton);

        // Create Complete Button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.onclick = () => completeExpense(index);
        li.appendChild(completeButton);

        // Create Remove Button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => removeExpense(index);
        li.appendChild(removeButton);

        expenseList.appendChild(li);
    });
}

// Function to get category name
function getCategoryName(categoryId) {
    switch (categoryId) {
        case '1': return 'Food';
        case '2': return 'Transport';
        case '3': return 'Entertainment';
        default: return 'Unknown';
    }
}

// Function to add expense
function addExpense(event) {
    event.preventDefault();
    const description = document.getElementById('description').value;
    const amount = Number(document.getElementById('amount').value); // Convert to number
    const category = document.getElementById('category').value;

    expenses.push({ description, amount, category });
    renderExpenses();
    document.getElementById('expenseForm').reset(); // Reset form
}

// Function to edit expense
function editExpense(index) {
    const expense = expenses[index];
    document.getElementById('description').value = expense.description;
    document.getElementById('amount').value = expense.amount; // Already a number
    document.getElementById('category').value = expense.category;

    // Remove the expense being edited
    expenses.splice(index, 1);
    renderExpenses();
}

// Function to complete expense
function completeExpense(index) {
    expenses.splice(index, 1); // Remove completed expense
    renderExpenses();
}

// Function to remove expense
function removeExpense(index) {
    expenses.splice(index, 1); // Remove expense
    renderExpenses();
}

// Event listener for the form
document.getElementById('expenseForm').addEventListener('submit', addExpense);

// Initial render
renderExpenses();
