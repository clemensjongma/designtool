<!DOCTYPE html>
<html>
<body>

    <input type="text" id="lengte"=> is lengte</input><br>
    <input type="text" id="breedte"=> is breedte</input><br>
    <input type="text" id="diepte"=> is diepte</input><br>
    <input type="text" id="rand"=> is rand</input><br>
    <input type="text" id="marge"=> is marge</input><br>

    <button onclick="toonResultaat()">Submit</button>

   
    <p>Resultaat breedte =</p>
    <p id="demo"></p>

<p>Plattegrond</p>
<canvas id="plattegrond" width="600" height="600"
style="border:1px solid #c3c3c3;">
Your browser does not support the canvas element.
</canvas>
<br>
<br>
<p>Dwarsdoorsnede </p>
<canvas id="vooraanzicht" width="600" height="600"
style="border:1px solid #c3c3c3;">
Your browser does not support the canvas element.
</canvas>
<br>
<br>
<p>Lengtedoorsnede</p>
<canvas id="zijaanzicht" width="600" height="600"
style="border:1px solid #c3c3c3;">
Your browser does not support the canvas element.
</canvas>
<br>

<?php
$lengte = $_POST["lengte"];
$breedte = $_POST["breedte"];
$diepte = $_POST["diepte"];
?>
<script src="design.js"></script>
</body>
</html>

