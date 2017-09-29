// function newNumber (number) {
//   this.
// }



$(document).ready(function(){
  $("#role").click(function (event) {
    event.preventDefault()
    var randomNum = Math.floor((Math.random() * 6) + 1);
        $('#diceRole').append(randomNum);

  })
});
