$("document").ready(function() {

  //Hide the search error message
  $(".missingEntry").hide();

  //Use datepicker
  $("#date").pickadate()
  $("#date-return").pickadate()

  //Hide advanced search options
  $("#amenities").hide()
  $("#price").hide()
  $("#star-rating").hide()
  $("#advanced-search").click(function(){
    $("#amenities").show();
    $("#price").show();
    $("#star-rating").show();
  });

  //Make search fields required
  var cityEntry, dateEntry, returnEntry

  cityEntry = $("#city").val();
  dateEntry = $("#date").val();
  returnEntry = $("#date-return").val();

  if (cityEntry.length === 0) {
    $(".missingEntry").show();
  } if (dateEntry.length === 0) {
    $(".missingEntry").show();
  } if (returnEntry.length === 0) {
    $(".missingEntry").show();
  } else {
    $(".missingEntry").hide();
  };
});







