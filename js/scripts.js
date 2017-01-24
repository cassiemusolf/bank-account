//business logic
function BankAccount(registerName, initialDeposit) {
  this.userName = registerName;
  this.money = initialDeposit;
}

function ChangeAccount(depositAmount, withdrawalAmount, money) {
  this.deposit = depositAmount;
  this.withdrawal = withdrawalAmount;
  this.newBalance  = money
}

ChangeAccount.prototype.accountBalance = function () {
  if (this.deposit > 0){
    this.newBalance += this.deposit;
  }
  if (this.withdrawal > 0){
    this.newBalance -= this.withdrawal;
  }
  return this.newBalance;
};




//user interface logic
$(document).ready(function() {
  var initialDeposit;
  $("#register").submit(function() {
    event.preventDefault();

    var registerName = $('#user-name').val();
    initialDeposit = parseInt($('#first-deposit').val());

    var startAccount = new BankAccount(registerName, initialDeposit);

    $('.account-balance').text('$' + startAccount.money);
  });

  $("#transactions").submit(function() {
    event.preventDefault();

    var depositAmount = parseInt($('#deposit-amount').val());
    var withdrawalAmount = parseInt($('#withdrawal-amount').val());

    var transaction = new ChangeAccount(depositAmount, withdrawalAmount, initialDeposit);

    $('.account-balance').text('$' + transaction.accountBalance());

  });
});
