var dataRef = new Firebase("https://train-station123.firebaseio.com/");
// $(document).ready(function() {

     // Capture Button Click
     $("#add-train").on("click", function() {
     	//evt.preventDefault()
     	// YOUR TASK!!!
     	// Code in the logic for storing and retrieving the most recent user.
     	// Dont forget to handle the "initial load"

     	// Get inputs, must declare variables at beginning
     	var tName = $('#name-input').val().trim();
     	var tDestination = $('#destination-input').val().trim();
     	var tFirstTrainTime = $('#first-train-time-input').val().trim();
     	var tFrequency = $('#frequency-input').val().trim();
          

          var newTrain = {
               name: tName,
               destination: tDestination,
               firstTrainTime: tFirstTrainTime,
               frequency: tFrequency
          }

     	dataRef.push(newTrain);
          console.log(newTrain.name);

          $('#name-input').val("");
          $('#destination-input').val("");
          $('#first-train-time-input').val("");
          $('#frequency-input').val("");
     	// Don't refresh the page!

     	return false;  // Same thing as prevent default.


});



     dataRef.on("child_added", function(childSnapshot, prevChildKey) {


          var tName = childSnapshot.val().name;
          var tDestination = childSnapshot.val().destination;
          var tFrequency = childSnapshot.val().frequency;
          var tFirstTrainTime = childSnapshot.val().firstTrainTime;
          var currentTime = moment();
          var firstTimeConverted = moment(tFirstTrainTime,"hh:mm").subtract(1, "years");
          var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
          var tRemainder = diffTime % tFrequency; 
          var tMinutesTillTrain = tFrequency - tRemainder;
          var tNextArrival = moment().add(tMinutesTillTrain, "minutes");
          $("#trainTable").append("<tr><td class='col-xs-2'>" + tName + "</td><td class='col-xs-2'>" + tDestination + "</td><td class='col-xs-2'>" + tFrequency + "</td><td class='col-xs-2'>" + moment(tNextArrival).format("hh:mm") + "</td><td class='col-xs-2'>" + tMinutesTillTrain + "</td></tr>")
     });
//}); // Closes start-button click
