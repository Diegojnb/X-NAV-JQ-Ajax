$(document).ready(function() {
  $.ajax({
    type:"GET",
    url:"text.txt",
    cache:false
  }).done(function(text){
    $("#second").html(text);
  });

  $("#second").click(function() {
    $.ajax({
      type:"GET",
      url:"text2.txt",
      cache:false
    }).done(function(text){
      $("#third").html(text);
    }).fail(function(){
      alert("FILE NOT FOUND");
    });
  });
  var jqxhr = $.getJSON("main.json", function() {
    console.log("sucess")
    }).done(function(data){
      $.each(data,function( i, item ) {
        $("#fourth").append(item);
      });
    }).fail(function() {
      alert("FILE NOT FOUND");
    });
});
