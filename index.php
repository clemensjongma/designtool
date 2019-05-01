<!DOCTYPE html>
<html>
<body>
<canvas id="myCanvas" width="600" height="600"
style="border:1px solid #c3c3c3;">
Your browser does not support the canvas element.
</canvas>
<br>
<?php
$lengte = $_POST["lengte"];
$breedte = $_POST["breedte"];
$diepte = $_POST["diepte"];
?>
<script>

var hoek = 30;
var lengte = prompt ('Vul lengte in','lengte');
var breedte = prompt ('Vul breedte in','breedte');
var tegelrand = prompt ('Vul de breedte van de rand in','tegelrand');
// var verhouding = lengte / breedte;
var lengtePlusTegels = parseInt(lengte) + 2*parseInt(tegelrand);
var breedtePlusTegels = parseInt(breedte) + 2*parseInt(tegelrand);
var verhoudingInclTegels = lengtePlusTegels / breedtePlusTegels;//zou eigenlijk ook verhouding kunnen heten
//berekening 'omhullende' lengte en breedte
var omhulLengte = breedtePlusTegels*Math.sin(hoek) + lengtePlusTegels * Math.cos(hoek);
var omhulBreedte = lengtePlusTegels * Math.sin(hoek) + breedtePlusTegels * Math.cos(hoek);

//bij staande rechthoek is breedte bepalend,bij liggend lengte
// if (omhulLengte>=omhulBreedte) {
//     schaal = 500/omhulLengte}
// else {
//     schaal = 500/omhulBreedte};
if(lengtePlusTegels>=breedtePlusTegels){
    schaal = 500/lengtePlusTegels
}
else {
    schaal = 500/breedtePlusTegels

}


//variabelen voor blauwe rechthoek
var nieuwebreedte = schaal * breedte;
var nieuwelengte = schaal * lengte;
var vertimarge = (600-nieuwebreedte)/2;
var horimarge = (600-nieuwelengte)/2;
//variabelen voor grijze rechthoek
var nieuwebreedtePlustegels = schaal * breedtePlusTegels;
var nieuwelengtePlustegels = schaal * lengtePlusTegels;
var vertimargePlusTegels = (600-nieuwebreedtePlustegels)/2;
var horimargePlustegels = (600-nieuwelengtePlustegels)/2;

//variabelen voor omtrek
var nieuweOmhulBreedte = schaal * omhulBreedte;
var nieuweOmhulLengte = schaal * omhulLengte;
var vertimargeOmhul = (600-nieuweOmhulBreedte)/2;
var horimargeOmhul = (600-nieuweOmhulLengte)/2;



var tekst1 = "Gekozen lengte is ";
var tekst2 = ", gekozen breedte is ";
var tekst3 = ", gekozen rand is ";
var koptekst = tekst1.concat(lengte, tekst2,breedte, tekst3, tegelrand);

var tekst4 = "Lengte inclusief randen is ";
var tekst5 = ", breedte inclusief randen is ";
var tekst6 = ".";
var voettekst =tekst4.concat(lengtePlusTegels,tekst5,breedtePlusTegels,tekst6);
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var cty = canvas.getContext("2d");


cty.font = "16px Arial";
cty.fillStyle = "#666677";
cty.fillText(horimargeOmhul, 50, 580);
ctx.fillText(vertimargeOmhul, 50,20);
ctx.strokeRect(vertimargeOmhul,horimargeOmhul,nieuweOmhulBreedte,nieuweOmhulLengte);
// ctx.translate(vertimargeOmhul,horimargeOmhul);


// cty.rotate(hoek*Math.PI /180);
cty.fillRect(horimargePlustegels,vertimargePlusTegels,nieuwelengtePlustegels,nieuwebreedtePlustegels);

// ctx.translate(horimarge,vertimarge)
ctx.fillStyle = "#0000FF";

ctx.fillRect((horimarge),(vertimarge),nieuwelengte,nieuwebreedte);
// ctx.strokeRect(50,50,500,500);
// ctx.font = "16px Arial";



// ctx.fillText("breedte", 10,40); 
// ctx.fillText("rand", 10,60);
// ctx.fillText(lengte, 10,30);
// ctx.fillText(breedte, 10,50); 
// ctx.fillText(tegelrand, 10,70); 

console.log(nieuweOmhulBreedte);
</script>
</body>
</html>


<!-- var nieuwebreedte = schaal * breedte;
var nieuwelengte = schaal * lengte;
var vertimarge = (600-nieuwebreedte)/2;
var horimarge = (600-nieuwelengte)/2; -->