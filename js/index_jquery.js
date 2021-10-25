$(document).ready(function(){
    $('h1').css("color","red");

    

    
    $( "button" ).click(function() {

        var text_a_inserer = $(this).html()
        var couleurText = $(this).attr('data-couleur')


        text_a_inserer = "Vous avez cliqué sur:"+text_a_inserer;

        $("p").html( text_a_inserer );
        $("p").css("color",couleurText);
      });
      
  
   
   
})
