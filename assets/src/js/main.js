$( document ).ready(function() {
    console.log( "Polećemooo!" );

    $("#slider-range").slider({
        range: true, 
        min: 25,
        max: 220,
        step: 1,
        slide: function( event, ui ) {
          $( "#min-price").html(ui.values[ 0 ]);
          
          $( "#max-price").html(ui.values[ 1 ]);         
        }
      })
});


  