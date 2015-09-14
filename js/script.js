$(document).ready(function() {
	var max;

	// Defining the function & determining what to append
	function fizzBuzzFun(num) {
		for (var i = 1; i <= num; i++) {
			if (i % 15 === 0) {
				$("#fizz").append("<li>FizzBuzz</li>")
			} else if (i % 3 === 0) {
				$("#fizz").append("<li>Fizz</li>");
			} else if (i % 5 === 0) {
				$("#fizz").append("<li>Buzz</li>");
			} else {
				$("#fizz").append("<li>" + i + "</li>");
			}
		}
	}

	// Invoking the function when the "Submit" button is pressed
	$("form").on("submit", function(element) {
		element.preventDefault();
		max = $("#userGuess").val();
		max = +max;
		while (isNaN(max)) {
    		max = +prompt("Please enter a number");
		}
		while (max % 1 !== 0 || max < 1) {
    		max = +prompt("Please enter an integer over 1");
		}
		$('#fizz > li').remove();
		fizzBuzzFun(max);
	});

	// Functionality for the "Clear All" Button
	$("#clear").click(function() {
		// Resets the appended fizz/buzz board
		$('#fizz > li').remove();
		// Resets the text field
		$("form")[0].reset();
	});
	alert("Let's get started!");
	
});