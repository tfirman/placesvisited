//business logic
function Destination(name, landmark, season, numbers, notes) {
  this.name = name;
  this.landmark = landmark;
  this.season = season;
  this.number = numbers;
  this.notes = notes;
}

// user interface logic
$(document).ready(function() {
  $("form#new-destination").submit(function(event) {
    event.preventDefault();

    var inputtedName = $("input#new-destination").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var seasonsArray = [];
    $("input:checkbox[name=season]:checked").each(function(){
      var aSeasonCheck = $(this).val();
      seasonsArray.push(aSeasonCheck);
    });
    var inputtedNumber = $("input#vNumber").val();
    var inputtedNotes = $("input#notes").val();

    var newDestination = new Destination(inputtedName, inputtedLandmark, seasonsArray, inputtedNumber, inputtedNotes);

    $("ul#destination").append("<li><span class='destination'>" + inputtedName + "</span></li>");

    $(".destination").last().click(function() {
      $("#show-destination").show();
      $("#show-destination h2").text(newDestination.name);
      $(".landmark").text(newDestination.landmark);
      $(".season").text(newDestination.season);
      $(".vNumbers").text(newDestination.number);
      $(".notes").text(newDestination.notes);
    });

    $("input#new-destination").val("");
    $("input#new-landmark").val("");
    $('input[type=checkbox]').each(function() {
      if (this.value === 'summer') {
        this.checked = true;
      } else {
        this.checked = false;
      };
    });
    $("input#vNumber").val("");
    $("input#notes").val("");

  });
});
