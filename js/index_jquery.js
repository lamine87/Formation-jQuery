$(document).ready(function(){
    $('h1').css("color","red");

    
    $( "#bouton1" ).click(function() {
        $("p").html( "Envoyer à Lamine" );
      });
      
      $( "#bouton2" ).click(function() {
        $("p").html( "Envoyer à Diarra" );
      });

      $( ".boutonType1" ).click(function() {
        $("p").html( "Envoyer à Mlle" );
      });

      $( ".boutonType2" ).click(function() {
        $("p").html( "Envoyer à M." );
      });
})
