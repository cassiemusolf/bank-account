var startAccount;
//business logic
function BankAccount(registerName, initialDeposit) {
  this.userName = registerName;
  this.money = initialDeposit;
}

BankAccount.prototype.depositMoney = function(depositAmount) {
  this.money += depositAmount;
}

BankAccount.prototype.withdrawMoney = function(withdrawAmount) {
  this.money -= withdrawAmount;
}

// function ChangeAccount(depositAmount, withdrawalAmount, money) {
//   this.deposit = depositAmount;
//   this.withdrawal = withdrawalAmount;
//   this.newBalance  = money;
// }
//
// ChangeAccount.prototype.accountBalance = function () {
//   if (this.deposit > 0){
//     this.newBalance += this.deposit;
//   }
//   if (this.withdrawal > 0){
//     this.newBalance -= this.withdrawal;
//   }
//   return this.newBalance;
// };

//user interface logic
$(document).ready(function() {
  var initialDeposit;

  $("#register").submit(function() {
    event.preventDefault();
    var registerName = $('#user-name').val();
    initialDeposit = parseInt($('#first-deposit').val());
    startAccount = new BankAccount(registerName, initialDeposit);
    $('.account-balance').text('$' + startAccount.money);
    $('#user-name').val("");
    $('#first-deposit').val("");
  });

  $("#transactions").submit(function() {
    event.preventDefault();
    var depositAmount = parseInt($('#deposit-amount').val());
    var withdrawalAmount = parseInt($('#withdrawal-amount').val());
    if (depositAmount > 0){
      startAccount.depositMoney(depositAmount);
    }
    if (withdrawalAmount > 0) {
      startAccount.withdrawMoney(withdrawalAmount);
    }
    $('.account-balance').text('$' + startAccount.money);
  });
});
