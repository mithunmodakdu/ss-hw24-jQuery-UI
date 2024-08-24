

$(document).ready(function(){

    // example-1
    $('#draggable').draggable();
 
    // example-2
     $('#droppable').droppable({
     drop: function() {
         $(this).css('background-color', 'green')
                .find('p').html('');
 
         $('#draggable').find('p').html('');
     }
    })
 
    // example-3
    $('#resizable').resizable();

    // example-4
    $('#selectable').selectable();

    // example-5
    $('#sortable').sortable();

    // example-6
    $('#accordion').accordion();

    // example-7
    var availableTags = ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"]
    $('#tags').autocomplete({source: availableTags});

    // example-8
    $('#datePicker').datepicker();

    // example-9
    $('#dialog').dialog();

    // example-10
    var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 2 );
 
      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }
 
    setTimeout( progress, 2000 );


 
 })