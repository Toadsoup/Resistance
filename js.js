var checkBand = function (color) {

    switch (color) {
    case 'Black':
      return 0;
    case 'Brown':
      return 1;
    case 'Red':
      return 2;
    case 'Orange':
      return 3;
    case 'Yellow':
      return 4;
    case 'Green':
      return 5;
    case 'Blue':
      return 6;
    case 'Violet':
      return 7;
    case 'Grey':
      return 8;
    case 'White':
      return 9;
    case 'Gold':
      return (0.1);
    case 'Silver':
      return (0.01);
    default:
      alert("BAD SHIT BRO!");
      return false;
    }
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
                    //                    $('#output').html(band1 + ' ' +band2 +' '+band3 +bandmult + '!');
                    if (band1val != 0 && band2val != 0){
                        $('#valueout').html('<h1>Resistance is ' + (((band1val * 10)+band2val)*bandmult) + " Ohms.</h1>");
                    }
                });
            });