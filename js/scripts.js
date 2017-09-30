function game() {
  this.total=0;
  this.subtotal=0;
  this.roll=0;
  this.turn=0;
}

var newGame = new game();

game.prototype.rollDice = function () {
  var randomNum = Math.floor((Math.random() * 6) + 1);
  this.roll = randomNum;
  this.additionOfSubtotal();
};

game.prototype.additionOfSubtotal = function () {
  if (this.roll === 1){
    this.subtotal=0;
    $('#output1').empty();
  }else if (this.roll !==1) {
      this.subtotal=this.subtotal+this.roll;
      // this.total = this.total + this.subtotal;
  }
};

// function for the click of the hold button and alerting the winner
game.prototype.totalNum = function () {
  this.total += this.subtotal;
  this.subtotal = 0;
  $('#output1').empty();
  if (this.bank>=100) {
    alert ('You Won')
  }
};



$(document).ready(function(){
  $("#roll").click(function (event) {
    event.preventDefault()
      newGame.rollDice()
        $('#output1').append("<li>"+newGame.roll+"<li>");
        $('#ps1').text(newGame.subtotal);

  })
  $("#hold").click(function (event) {
      event.preventDefault()
      newGame.totalNum()
      $('#ps1').text(newGame.subtotal);
      $('#p1').text(newGame.total);
  })

});
