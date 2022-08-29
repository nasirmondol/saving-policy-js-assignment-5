// Calculate the total expense

function univarsalFuntion(product){
    const expenseInput = document.getElementById(product+'-input');
    const foodNumber = parseFloat(expenseInput.value);
    return foodNumber;
}

function getInputValue(){
    const foodNumber = univarsalFuntion('food')
    const rentNumber = univarsalFuntion('rent')
    const clothesNumber = univarsalFuntion('clothes')

    const totalExpense = foodNumber + rentNumber + clothesNumber;
    const totalExpenseAmount = document.getElementById('expense-total');
    totalExpenseAmount.innerText = totalExpense;
    const incomeTotal = document.getElementById('income-input');
    const incomeNumber = parseFloat(incomeTotal.value);
    let balance = document.getElementById('balance-total');
    let balanceNumber = balance.innerText;
    const savings = incomeNumber - totalExpense;
    balance.innerText = savings;
    
    const saveAmount = document.getElementById('save-total');
    const saveNumber = parseFloat(saveAmount.value);
    const savingAmount = document.getElementById('saving-amount');

    let totalSave = (savings * 10) / 100;
    savingAmount.innerText = totalSave;

    const remaining = document.getElementById('remaining-amount'); 
    let remainingNumber = parseFloat(remaining.innerText);
    console.log(remainingNumber)

    let restRemaining = savingAmount - totalSave;
    remainingNumber = restRemaining
}


document.getElementById('calculate-btn').addEventListener('click', function(){
    getInputValue();
})

document.getElementById('save-btn').addEventListener('click', function(){
    getInputValue();
})