var dataRef = new Firebase("https://train-station123.firebaseio.com/");
console.log("hi");
$(document).ready(function() {

     // Capture Button Click
     $("#add-employee").on("click", function() {
     	//evt.preventDefault()
     	// YOUR TASK!!!
     	// Code in the logic for storing and retrieving the most recent user.
     	// Dont forget to handle the "initial load"

     	// Get inputs, must declare variables at beginning
     	name = $('#name-input').val().trim();
     	role = $('#role-input').val().trim();
     	startDate = $('#start-date-input').val().trim();
     	monthlyRate = $('#monthly-rate-input').val().trim();

     	dataRef.push({
     		name: name,
     		role: role,
     		startDate: startDate,
     		monthlyRate: monthlyRate
     	});
     	// Don't refresh the page!
     	return false;  // Same thing as prevent default.
     });

}); // Closes start-button click
