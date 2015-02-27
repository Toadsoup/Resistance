var checkBand = function (color) {
    var colorCodes = {
      'black' : 0,
      'brown' : 1,
      'red': 2,
      'orange' : 3,
      'yellow' : 4,
      'green' : 5,
      'blue' : 6,
      'violet' : 7,
      'grey' : 8,
      'white' : 9,
      'gold' : 0.1,
      'silver' : 0.01,
    };
    return colorCodes[color.toLowerCase()];
  }

  $(document).ready( function () {
    var resistance = 0;
    var band1 = '';
    var band2 = '';
    var band3 = '';
    var tolerance = 0;
    var band1val = 0;
    var band2val = 0;
    var bandmult = 1;
            
    $('.band').on('click', function(e){
      if($(this).hasClass("band1")){
        band1 = $(event.target).text();
        $('#b1').css('background-color', $(event.target).text());
        band1val = checkBand($(event.target).text());
      } else if($(this).hasClass("band2")){
        $('#b2').css('background-color', $(event.target).text());
        band2 = $(event.target).text();    
        band2val = checkBand($(event.target).text());
      } else if($(this).hasClass("band3")){
        $('#b3').css('background-color', $(event.target).text());
        band3 = $(event.target).text();     
        bandmult = checkBand($(event.target).text());
        var temp = 1;
        if(bandmult == 0 || bandmult >=1 ){
          for(var x = 0; x < bandmult; x++){
            temp *= 10;                              
          }
          bandmult = temp;
        }
      } else if($(this).hasClass("band4")){
        $('#b4').css('background-color', $(event.target).text());
        tolerance = $(event.target).text();                        
      }
      if (band1val != 0 || band2val != 0){
        $('#valueout').html('<h1>Resistance is ' 
          + (((band1val * 10)+band2val)*bandmult) + " Ohms.</h1>");
      } else {
        $('#valueout').html('<h1>Resistance is futile.</h1>');
      }
    });
});