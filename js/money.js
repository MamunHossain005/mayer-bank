document.getElementById('btn-deposit').addEventListener('click', ()=> {
    const depositFieldElement = document.getElementById('deposit-field');
    const newDepositTotal = parseFloat(depositFieldElement.value);
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalElement.innerText);

    if(isNaN(newDepositTotal)) {
        alert('Please enter a valid number!!!');
        depositFieldElement.value = '';
    }
    else {
        depositTotalElement.innerText = previousDepositTotal + newDepositTotal;
        balanceTotalElement.innerText = newDepositTotal + balanceTotal;
        depositFieldElement.value = '';
    }
});

document.getElementById('btn-withdraw').addEventListener('click', ()=> {
    const withdrawFieldElement = document.getElementById('withdraw-field');
    const newWithdrawTotal = parseFloat(withdrawFieldElement.value);
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);
    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotal = parseFloat(balanceTotalElement.innerText);

    if(isNaN(newWithdrawTotal)) {
        alert('Please enter a valid number!!!')
        withdrawFieldElement.value = '';
    }
    else if(newWithdrawTotal > balanceTotal) {
        alert('You have not enough money to withdraw');
        withdrawFieldElement.value = '';
    }
    else {
        withdrawTotalElement.innerText = previousWithdrawTotal + newWithdrawTotal;
        balanceTotalElement.innerText = balanceTotal - newWithdrawTotal;
        withdrawFieldElement.value = '';
    }
});