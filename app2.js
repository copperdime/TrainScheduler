// After user enters values and clicks submit, values are then appended to the div

	// Initialize Firebase
	var config = {
    apiKey: "AIzaSyCw1peCefApbEhy2noqRWrGz_JhCZr9y6I",
    authDomain: "train-schedule-test.firebaseapp.com",
    databaseURL: "https://train-schedule-test.firebaseio.com",
    projectId: "train-schedule-test",
    storageBucket: "train-schedule-test.appspot.com",
    messagingSenderId: "793854835725"
    };


	firebase.initializeApp(config);
	var database = firebase.database();

	 // Clears all previous entries
      var trainName = "";
      var destination = "";
      var trainTime = "";
      var frequency = "";

    $('#add-entry').on('click', function(event) {
      event.preventDefault();


      // Capture user inputs and store into variables
      trainName = $('#trainName-input').val().trim();
      destination = $('#destination-input').val().trim();
      trainTime = $('#trainTime-input').val().trim();
      frequency = $('#frequency-input').val().trim();


       var train = {};
		      train.trainName = trainName;
		      train.destination = destination;
		      train.trainTime = trainTime;
		      train.frequency = frequency;

      // pushing trains object into the database
      database.ref().push(train);

     });

    database.ref().orderByChild("destination").on("child_added", function(childSnapshot) {

      // Log everything that's coming out of snapshot
      console.log(childSnapshot.val().trainName);
      console.log(childSnapshot.val().destination);
      console.log(childSnapshot.val().trainTime);
      console.log(childSnapshot.val().frequency);
  
 	 $("#train-list").append("<div class=\"row\">"+
        "<div class=\"col-sm-3\">" + childSnapshot.val().trainName   + "</div>" +
        "<div class=\"col-sm-2\">" + childSnapshot.val().destination + "</div>" +
        "<div class=\"col-sm-2\">" + childSnapshot.val().frequency   + "</div>" +
        "<div class=\"col-sm-2\">" + childSnapshot.val().trainTime   + "</div>"+
        "<div class=\"col-sm-3\">" + childSnapshot.val().frequency   + " </div></div>");
       

    // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

	
    		// calculation of minutes away
    // 		var currentTime = moment().format('LT'); 
				// console.log(currentTime);
			
    // 		var minutesAway = trainTime*frequency;
    // 		trainTime, frequency, currentTime;

    // 		var time = trainTime;
				// var z = time.toString().split("");
				// var hours = z.slice(0,2);
				// var min = z.slice(3,5);
				// hours = hours.join('');
				// min = min.join('');

				// hours = parseInt(hours);
				// min = parseInt(min);

				// var timeMin = (hours*60) + min;
				// var arrivalEvent = timeMin+frequency;

				// for(var n = 0; n < 1399; n++){
				// 	if((arrivalEvent < 1400) && (arrivalEvent < currentTimeMins)){
				// 		var arriving = arrivalEvent(n);
				// 	}	

				// console.log(displayTime(timeMin));
				// }
				// var displaytimeMin = $("#number").append(displayTime(timeMin));
				// var displaytime_HrsMins = $("#inHours").append(hours +"hrs").append(" " + min+"mins");
				
			

		// function displayTime(){
		// 	var standardTimehours = Math.floor(timeMin/60);
		// 	var standardTimeMins = (timeMin%60);
		// 		if(standardTimehours > 12){
		// 			standardTimehours = standardTimehours - 12;
		// 		}

		// 	var standardTime = standardTimehours + ":" + standardTimeMins;

		// 	return standardTime.toString();
		// }

    		// post user info to row designating one value to an index
		   
		   
		   


   

