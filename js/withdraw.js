/*
1. add event handler with the withdraw buttton;(addEventListener);
2.  get the withdraw amount from the withdraw input field (by .innerText);
2.5  also make sure to convert the input into number (by parseFloat);
3.  get the withdraw total  
4. calculate total withdraw amount 
4.5  set total withdraw amount 
5. get the previous balance total   
6. calculate new balance total 
6.5 set the new balance total  
7. clear the input field  
*/

// step 1:
document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step 2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;

    // step 2.5:
    const newWithDrawAmount = parseFloat(newWithdrawAmountString);

    // step 7:
    withdrawField.value = "";

    // warning massage

    if (isNaN(newWithDrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step 3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWitdrawTotalString = withdrawTotalElement.innerText;
    const previousWitdrawTotal = parseFloat(previousWitdrawTotalString);

    // step 5:
    const balanaceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanaceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    if (newWithDrawAmount > previousBalanceTotal) {
        alert("Baap er bank e eto taka nai ");
        return;
    }

    // step 4:
    const currenWithdrawTotal = previousWitdrawTotal + newWithDrawAmount;
    withdrawTotalElement.innerText = currenWithdrawTotal;

    // step 6:
    const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
    balanaceTotalElement.innerText = newBalanceTotal;



})  