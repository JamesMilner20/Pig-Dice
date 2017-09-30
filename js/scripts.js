// function newNumber (number) {
//   this.
// }
// function hold ($('#diceRole').val().split())

function game() {
  this.total=0;
  this.subtotal=0;
  this.roll=0;
  this.turn=0;
}

// function switchPlayer() {
//   if (this.roll===1) {
//   }
// }

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
  }
};

$(document).ready(function(){
  $("#roll").click(function (event) {
    event.preventDefault()
      newGame.rollDice()
        $('#output1').append("<li>"+newGame.roll+"<li>");
        $('#ps1').text(newGame.subtotal);
        $('p1').text(newGame.total);

  })

  // $("#hold").click(function(){

  // })
});
