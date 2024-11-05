document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('transaction-form');
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const typeInput = document.getElementById('type');
    const transactionList = document.getElementById('transaction-list');
    const totalIncome = document.getElementById('total-income');
    const totalExpense = document.getElementById('total-expense');
    const netBalance = document.getElementById('net-balance');

    let transactions = [];

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const description = descriptionInput.value.trim();
        const amount = parseFloat(amountInput.value);
        const type = typeInput.value;

        if (description && !isNaN(amount) && amount > 0) {
            transactions.push({ description, amount, type });
            updateDisplay();
            form.reset();
        }
    });

    const updateDisplay = () => {
        transactionList.innerHTML = '';
        let income = 0, expense = 0;

        transactions.forEach((transaction, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${transaction.description}: ₹${transaction.amount.toFixed(2)} (${transaction.type})
                <button class="edit" onclick="editTransaction(${index})">Edit</button>
                <button class="delete" onclick="deleteTransaction(${index})">Delete</button>
            `;
            transactionList.appendChild(li);

            if (transaction.type === 'income') income += transaction.amount;
            else expense += transaction.amount;
        });

        totalIncome.textContent = `₹${income.toFixed(2)}`;
        totalExpense.textContent = `₹${expense.toFixed(2)}`;
        netBalance.textContent = `₹${(income - expense).toFixed(2)}`;
    };

    window.editTransaction = (index) => {
        const transaction = transactions[index];
        descriptionInput.value = transaction.description;
        amountInput.value = transaction.amount;
        typeInput.value = transaction.type;
        transactions.splice(index, 1);
        updateDisplay();
    };

    window.deleteTransaction = (index) => {
        transactions.splice(index, 1);
        updateDisplay();
    };
});
