$(document).ready(function(){
  $("#sayIt").submit(function(){
    var sprayIt = $("input#thoughts").val();
    alert(sprayIt.toUpperCase());
  });
});
