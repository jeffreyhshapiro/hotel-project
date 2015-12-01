$("document").ready(function(){

  $(".price").append(function(){
    var price = Math.round(Math.random()*1000);
    return price
  });

  $(".hideListing").click(function(){
    $(this).hide();
  })


})