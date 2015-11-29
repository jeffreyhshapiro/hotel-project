var inputCodeDateIn = $("date-in");
var inputCodeDateOut = $("date-out");

$("#destination").click(function () {
  alert("A list of cities will appear here");
})

$("#date").pickadate()
$("#date-return").pickadate()



// Date picker for check in and check out functions in modal
/*$("#date-in").on("click", function(){
  $('.datepicker').pickadate({
    selectYears: true,
    selectMonths: true
  $("#check-in").modal('show');
  $('.datepicker').pickadate({
    selectYears: true,
    selectMonths: true
  })

 $("#date-out").modal('show');
  $(".modal-body").append(inputCodeDateOut);
  $('.datepicker').pickadate({
    selectYears: true,
    selectMonths: true
  })
})*/



