var inputArray = [];

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var inputString = ($('input#word').val()).toLowerCase();
    console.log(inputString);

    if ($('input#word').val() === "") {
      $('#output').text('Please enter a series of characters.');
      $('#word-input').addClass('has-error');
    } else {
      for (i=0; i < inputString.length; i++) {
        inputArray.push(inputString[i]);
      }
      var inputArrayReverse = inputArray.reverse();
      var inputStringReverse = inputArrayReverse.join("");
      console.log(inputStringReverse);

//DOES NOT CORRECTLY COMPARE STRINGS//
      if (inputString === inputStringReverse) {
        $('#output').text("Your input IS a palindrome.");
      } else if (inputString !== inputStringReverse) {
        $('#output').text("Your input IS a palindrome.");
      }
    }
  });
});
