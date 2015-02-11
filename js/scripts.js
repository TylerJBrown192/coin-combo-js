var coinChange = function(input_money) {
  var interim_money = input_money.replace(/\$/, "");
  var dope_money = interim_money.replace(/\./, "");
  var money = parseInt(dope_money);
  var changies = [0, 0, 0, 0];

  while (money >= 25) {
    changies[0]++;
    money -= 25
  }

  while (money >= 10) {
    changies[1]++;
    money -= 10
  }

  while (money >= 5) {
    changies[2]++;
    money -= 5
  }

  while (money >= 1) {
    changies[3]++;
    money -= 1
  }
  return changies;
};

$(document).ready(function() {
  $("form#monies").submit(function(event) {
    var inputMoney = $("input#user_monies").val();
    var result = coinChange(inputMoney);

    $(".quarters").text(result[0]);
    $(".whitneys").text(result[1]);
    $(".nickels").text(result[2]);
    $(".pennies").text(result[3]);

    $("#result").show();
    event.preventDefault();
  });
});
