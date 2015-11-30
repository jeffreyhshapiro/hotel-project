$("document").ready(function() {

  $("#date").pickadate()
  $("#date-return").pickadate()

  $("#amenities").hide()
  $("#price").hide()
  $("#star-rating").hide()
  $("#advanced-search").click(function(){
    $("#amenities").show();
    $("#price").show();
    $("#star-rating").show();
  });

  $("document").on("click","#submit-button", function(){
    if ($("input").val() === "") {
      alert("Please fill out the missing fields");
    };
  });

});







