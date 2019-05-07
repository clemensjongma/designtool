<!DOCTYPE html>
<html>
<body>
<p>Plattegrond</p>
<canvas id="plattegrond" width="600" height="600"
style="border:1px solid #c3c3c3;">
Your browser does not support the canvas element.
</canvas>
<p>Buitenste vierkant is grens canvas</p>
<p>Grootste maat wordt bepalend voor schaal</p>
<br>

<br>
<p>Zijaanzicht</p>
<canvas id="zijaanzicht" width="600" height="600"
style="border:1px solid #c3c3c3;">
Your browser does not support the canvas element.
</canvas>
<p>Vooraanzicht</p>
<canvas id="vooraanzicht" width="600" height="600"
style="border:1px solid #c3c3c3;">
Your browser does not support the canvas element.
</canvas>

<br>

<?php
$lengte = $_POST["lengte"];
$breedte = $_POST["breedte"];
$diepte = $_POST["diepte"];
?>
<script src="design.js"></script>;
</body>
</html>


<!-- var nieuwebreedte = schaal * breedte;
var nieuwelengte = schaal * lengte;
var vertimarge = (600-nieuwebreedte)/2;
var horimarge = (600-nieuwelengte)/2; -->