let myAccount = {
    name: 'Andrew Mead',
    expenses: 0,
    income: 0
}

let addExpense = (account, amount) => {
    account.expenses = account.expenses + amount;
}

// addIncome(account, amount) -> increase the income property
let addIncome = (account, amount) => {
    account.income = account.income + amount;
}
// resetAccount(account) -> put expenses and income to zero
let resetAccount = (account) => {
    account.income = 0;
    account.expenses = 0;
}
// getAccountSummary(account) -> returns the account info for example:
// Account for Andrew has $900, $1000 in income, $100 in expenses
let getAccountSummary = (account) => {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}, $${account.income} in income, $${account.expenses} in expenses`;
}

//addIncome
addIncome(myAccount, 300);
console.log(myAccount);
//addExpense
addExpense(myAccount, 100);
console.log(myAccount);
//addExpense
addExpense(myAccount, 50);
console.log(myAccount);
//getAccountSummary
console.log(getAccountSummary(myAccount));
//resetAccount
resetAccount(myAccount);
console.log(myAccount);
//getAccountSummary
console.log(getAccountSummary(myAccount));