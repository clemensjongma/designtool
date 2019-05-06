var lengte = prompt ('Vul lengte in','lengte');
var breedte = prompt ('Vul breedte in','breedte');
var tegelrand = prompt ('Vul de breedte van de rand in','tegelrand');
var diepte = prompt ('Vul diepte in (kleiner dan L en b)','diepte');
var lengtePlusTegels = parseInt(lengte) + 2*parseInt(tegelrand);
var breedtePlusTegels = parseInt(breedte) + 2*parseInt(tegelrand);



//bij staande rechthoek is breedte bepalend,bij liggend lengte
//grootste afmeting wordt 500px

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
//variabelen voor aanzichten
var nieuwediepte = schaal * diepte;
var dieptemarge = (600-nieuwelengte)/2;   




var tekst1 = "Gekozen lengte is ";
var tekst2 = ", gekozen breedte is ";
var tekst3 = ", gekozen rand is ";
var koptekst = tekst1.concat(lengte, tekst2,breedte, tekst3, tegelrand);

var tekst4 = "Lengte inclusief randen is ";
var tekst5 = ", breedte inclusief randen is ";
var tekst6 = ".";
var voettekst =tekst4.concat(lengtePlusTegels,tekst5,breedtePlusTegels,tekst6);
var canvas = document.getElementById("plattegrond");

var cty = canvas.getContext("2d");
cty.font = "16px Arial";
cty.lineWidth = 0.5;
cty.fillStyle = "#666677";
cty.fillText(voettekst, 50, 580);
cty.fillRect(horimargePlustegels,vertimargePlusTegels,nieuwelengtePlustegels,nieuwebreedtePlustegels);

var ctx = canvas.getContext("2d");
ctx.fillStyle = "#3333FF";
ctx.font = "16px Arial";
ctx.fillText(koptekst, 50,20);
ctx.fillRect((horimarge),(vertimarge),nieuwelengte,nieuwebreedte);
