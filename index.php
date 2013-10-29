<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
        <style>
            h1{
                font-size: 1.5em;
                font-family: sans-serif;
            }
            
            .band{
                width: 70px;
                float: left;
                padding: 10px;
            }
            .black{
                background-color: black;
                color: white;
            }
            .brown{
                background-color: brown;
            }
            .red{
                background-color: red;
            }
            .orange{
                background-color: orange;
            }
            .yellow{
                background-color: yellow;
            }
            .green{
                background-color: green;
            }
            .blue{
                background-color: blue;
            }
            .violet{
                background-color: violet;
            }
            .grey{
                background-color: gray;
            }
            .white{
                background-color: white;
            }
            .gold{
                background-color: gold;
            }
            .silver{
                background-color: silver;
            }
            .none{
                background-color: #ddd;
            }
            #picker{
                margin: 0 auto;
                width: 360px;
            }
            #render {
                background-color: tan;
                width: 100%;
                height: 60px;
                border-radius: 25px;
            }

            #b1, #b2, #b3, #b4 {
                height: 100%;
                width: 20px;
                background-color: black;
                display: inline-block;
                margin: 0 5px;
            }
            #b1 {
                margin-left: 35px;
            }
            #b4 {
                margin-left: 50px;
            }

            #output {
                clear: both;
            }

        </style>
        <title>Resistance if Futile</title>
    </head>
    <body>
        <div id="picker">
            <div id="valueout">
                <h1>Resistance is futile.</h1>
            </div>

            <div id="render">
                <div id="b1"></div>
                <div id="b2"></div>
                <div id="b3"></div>
                <div id="b4"></div>
            </div>


            <div class="band band1">
                Band 1:
                <div data-color="black" class="black">Black</div>
                <div class="brown">Brown</div>
                <div class="red">Red</div>
                <div class="orange">Orange</div>
                <div class="yellow">Yellow</div>
                <div class="green">Green</div>
                <div class="blue">Blue</div>
                <div class="violet">Violet</div>
                <div class="grey">Grey</div>
                <div class="white">White</div>
            </div>
            <div class="band band2">
                Band 2:
                <div class="black">Black</div>
                <div class="brown">Brown</div>
                <div class="red">Red</div>
                <div class="orange">Orange</div>
                <div class="yellow">Yellow</div>
                <div class="green">Green</div>
                <div class="blue">Blue</div>
                <div class="violet">Violet</div>
                <div class="grey">Grey</div>
                <div class="white">White</div>
            </div>
            <div class="band band3 multiplier">
                Multiplier:
                <div class="black">Black</div>
                <div class="brown">Brown</div>
                <div class="red">Red</div>
                <div class="orange">Orange</div>
                <div class="yellow">Yellow</div>
                <div class="green">Green</div>
                <div class="blue">Blue</div>
                <div class="violet">Violet</div>
                <div class="grey">Grey</div>
                <div class="white">White</div>
                <div class="gold">Gold</div>
                <div class="silver">Silver</div>
            </div>
            <div class="band band4 tolerance">
                Tolerance:
                <div class="black">Black</div>
                <div class="brown">Brown</div>
                <div class="red">Red</div>
                <div class="yellow">Yellow</div>
                <div class="green">Green</div>
                <div class="blue">Blue</div>
                <div class="violet">Violet</div>
                <div class="grey">Grey</div>
                <div class="gold">Gold</div>
                <div class="silver">Silver</div>
                <div class="none">None</div>
            </div>
            <div id="output"></div>
        </div>

        <script>
            var checkBand = function(color){
                switch(color){
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
                        return .1;
                    case 'Silver':
                        return .01;
                    default:
                        alert('BAD SHIT BRO!');
                        return false;
                }
            }

            $(document).ready(function() {
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
        </script>

    </body>
</html>
