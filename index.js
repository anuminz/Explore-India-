

$(document).ready(function(){
  $("#destinations").hover(function(){
    $(this).css("background-color", "yellow");
  });
});
    
  
$(document).ready(function(){
  $(".destination").hover(function(){
    // Change the color of the text inside <h3> and <p> to red
    $(this).find("h3, p").css("color", "red");
  }, function(){
    // Revert the color back to the original when the hover ends
    $(this).find("h3, p").css("color", "");
  });
});  
    
$(document).ready(function(){
  $(".footer").hover(function(){
    $(this).css("background-color","pink");
  });
});  

$(document).ready(function(){
  $("#destinations").hover(function(){
    $(this).css("background-image","url(footer.jpg)");
  });
});  