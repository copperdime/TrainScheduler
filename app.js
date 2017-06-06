// After user enters values and clicks submit, values are then appended to the div
   

    $("#add-user").on("click", function(event) {
      event.preventDefault();

      // Capture User Inputs and store into variables
      var trainName = $("#trainName-input").val().trim();
      var destination = $("#destination-input").val().trim();
      var trainTime = $("#trainTime-input").val().trim();
      var frequency = $("#frequency-input").val().trim();

      console.log(trainName);
      console.log(destination);
      console.log(trainTime);
      console.log(frequency);

      // Emptying values for listed input fields
      $("#postTrainName").html();
      $("#postDestination").html();
      $("#postFirstTrain").html();
      $("#postFrequency").html();

      // collecting user input info and assigning values to fields
      $("#postTrainName").html(trainName);
      $("#postDestination").html(destination);
      $("#postFirstTrain").html(trainTime);
      $("#postFrequency").html(frequency);

      // trainName.appendTo(#postTrainName);
      // trainInfo.append();

