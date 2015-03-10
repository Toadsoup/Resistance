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

var checkTolerance = function(color) {
  var toleranceCodes = {
      'brown' : 1,
      'red': 2,
      'yellow' : 5,
      'green' : .5,
      'blue' : .25,
      'violet' : .1,
      'grey' : .05,
      'gold' : 5,
      'silver' : 10,
      'none' : 20
    };
    return toleranceCodes[color.toLowerCase()];
}

var checkMultiplier = function (multiplier) {
  var temp = 1;
  if( multiplier >= 0 ){
    for(var x = 0; x < multiplier; x++){
      temp *= 10;                              
    }
    return temp;
  }
}

var setBandColor =function(bandNum, bandColor) {
  var value = 'linear-gradient( to bottom, #fff, ' + bandColor.toLowerCase() + ' 20%, ' + bandColor.toLowerCase() + ' 90% , #000 )'
  $(bandNum).css('background', value);
//  console.log(bandColor.toLowerCase);
  if(bandColor.toLowerCase() === 'none'){
    $(bandNum).css('display', 'none')
  } else {
    $(bandNum).css('display', 'inline-block');
  }
  return this;
}

$(document).ready( function () {
  var resistance = 0;
  var tolerance = 'none';
  var band1val = 0;
  var band2val = 0;
  var bandmult = 1;
            
  $('.band').on('click', function(e){

    if($(this).hasClass("band1")){
      setBandColor('#b1', $(event.target).data("color") );
      band1val = checkBand($(event.target).data("color"));
      
    } else if($(this).hasClass("band2")){
      setBandColor('#b2', $(event.target).data("color") );  
      band2val = checkBand($(event.target).data("color"));
      
    } else if($(this).hasClass("band3")){
      setBandColor('#b3', $(event.target).data("color") );
      bandmult = checkMultiplier( checkBand($(event.target).data("color") ) );       

    } else if($(this).hasClass("band4")){
      setBandColor('#b4', $(event.target).data("color") );
      tolerance = $(event.target).data("color");                        
    }

      if (band1val != 0 || band2val != 0){
        resistance = (((band1val * 10)+band2val)*bandmult);
        var string = numeral(resistance).format('00.0 a');
        $('#valueout').html('<h1>Resistance is ' 
          + string + " Ohm" 
          + ( resistance > 1 ? "s" : "")
          + "</h1><h2>±"
          +  numeral( checkTolerance(tolerance) * resistance / 100).format('00.0 a')
          + " ("
          + checkTolerance(tolerance) 
          + "%)</h2>"
          );
      } else {
        $('#valueout').html('<h1>Resistance is futile.</h1>'
          + "<h2>It is futile to resist.</h2>");
      }
    });
});