<!DOCTYPE html>
<html>

<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link id="pagestyle" rel="stylesheet" type="text/css" href="stylesheet.css">
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> 
<!-- <?php $lengte="";$breedte="";$diepte="";$rand="";$marge="";$bekleding=""?> -->
</head>

<body>
<div class="parallax">
<div class="container">
    <!-- <input type="text" id="lengte"=> is lengte</input><br>
    <input type="text" id="breedte"=> is breedte</input><br>
    <input type="text" id="diepte"=> is diepte</input><br>
    <input type="text" id="rand"=> is rand</input><br>
    <input type="text" id="marge"=> is marge</input><br> -->

    <div class="row">
              <div class="col-75">
                <label for="lng">Hoe lang wordt uw zwembad?</label>
              </div>
              <div class="col-25">
                <input type="text" id="lengte" placeholder="lengte in meters..">
              </div>
        </div>  


        <div class="row">
              <div class="col-75">
                <label for="brd">Hoe breed wordt uw zwembad?</label>
              </div>
              <div class="col-25">
                <input type="text" id="breedte" placeholder="breedte in meters..">
              </div>
        </div>


        <div class="row">
              <div class="col-75">
                <label for="dp">Hoe diep wordt uw zwembad?</label>
              </div>
              <div class="col-25">
                <input type="text" id="diepte" placeholder="diepte in meters..">
              </div>
        </div>
            

        <div class="row">
              <div class="col-75">
                <label for="rnd">Hoe groot wordt de rand om het zwembad?</label>
              </div>
              <div class="col-25">
                <input type="text" id="rand" placeholder="rand in meters..">
              </div>
        </div>
        
        <!-- <div class="row"> -->
              <div class="col-75">
                <label for="mrg">Wat wordt de afstand van de bovenkant tot het waterniveau?</label>
              </div>
              <div class="col-25">
                <input type="text" id="marge" placeholder="afstand in meters..">
              </div>
        


    <button onclick="toonResultaat()">Laat zien!</button>

</div>   
    <!-- <p>Resultaat breedte =</p>
    <p id="demo"></p> -->
<br>
<br>
    <div class="container">
    <p>Plattegrond</p>
    <canvas id="plattegrond" width="600" height="600"
    style="border:1px solid #c3c3c3;">
    Your browser does not support the canvas element.
    </canvas>
    </div>
    <br>

<br>
<div class="container">
<p>Lengtedoorsnede</p>
<canvas id="zijaanzicht" width="600" height="600"
style="border:1px solid #c3c3c3;">
Your browser does not support the canvas element.
</canvas>

</div>
<br>
<br>

<div class="container">
<p>Dwarsdoorsnede </p>
<canvas id="vooraanzicht" width="600" height="600"
style="border:1px solid #c3c3c3;">
Your browser does not support the canvas element.
</canvas>

</div>
<br>
<br>
</div>

<?php
$lengte = $_POST["lengte"];
$breedte = $_POST["breedte"];
$diepte = $_POST["diepte"];
?>
<script src="design.js"></script>
</body>
</html>

