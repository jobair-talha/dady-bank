function gettingInputData (inputId){
    const inputFeild = document.getElementById(inputId)
    const userAmount = parseFloat(inputFeild.value)
    inputFeild.value = ''
    return userAmount;
}
function updateBalance(addMoney, updateId){
    const updateMoneyId = document.getElementById(updateId)
    const updateBalance = parseFloat(updateMoneyId.innerText)
    updateMoneyId.innerText = updateBalance + addMoney;
}
function totalBalance(userBalance,balance){
    const totalTextBalance = document.getElementById('total-money');
    const totalAmountBalance = parseFloat(totalTextBalance.innerText);
    if(balance == true){
        totalTextBalance.innerText = totalAmountBalance + userBalance ;
    }else{
        totalTextBalance.innerText = totalAmountBalance - userBalance ;
    }

}
document.getElementById('add-deposite').addEventListener('click', function(){
    const userFeild = gettingInputData('deposite-field')
    updateBalance(userFeild, 'deposite-money')
    totalBalance(userFeild, true)
})
document.getElementById('add-widthdrow').addEventListener('click', function(){
    const userFeild = gettingInputData('widthdrow-feild')
    updateBalance(userFeild, 'withdrow-money')
    totalBalance(userFeild, false)
})
