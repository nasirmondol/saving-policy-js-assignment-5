// Calculate the total expense
document.getElementById('calculate-btn').addEventListener('click', function(){
    const expenseFood = document.getElementById('food-input');
    const foodNumber = parseFloat(expenseFood.value);
    const expenseRent = document.getElementById('rent-input');
    const rentNumber = parseFloat(expenseRent.value);
    const expenseClothes = document.getElementById('clothes-input');
    const clothesNumber = parseFloat(expenseClothes.value);
    const totalExpense = foodNumber + rentNumber + clothesNumber;
    const totalExpenseAmount = document.getElementById('expense-total');
    totalExpenseAmount.innerText = totalExpense;
    const incomeTotal = document.getElementById('income-input');
    const incomeNumber = parseFloat(incomeTotal.value);
    // console.log(incomeNumber);
    let balance = document.getElementById('balance-total');
    let balanceNumber = balance.innerText;
    const savings = incomeNumber - totalExpense;
    balance.innerText = savings;
})