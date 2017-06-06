// After user enters values and clicks submit, values are 
   

    $("#add-train").on("click", function(event) {
      event.preventDefault();

      // Capture User Inputs and store into variables
      var trainName = $("#trainName-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var trainTime = $("#trainTime-input").val().trim();
      var frequency = $("#frequency-input").val().trim();

      var trainInfo = [trainName, destination, trainTime, frequency, minutesAway];
      trainInfo.append();

