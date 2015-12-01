$("document").ready(function(){

  $(".price").append(function(){
    var price = Math.round(Math.random()*1000);
    return price
  });

  $("#alogonquinHide").click(function(){
    $("#alogonquinPanel").hide();
  })

  $("#marriotHide").click(function(){
    $("#marriotPanel").hide();
  })

  $("#highLineHide").click(function(){
    $("#highLinePanel").hide();
  })

})