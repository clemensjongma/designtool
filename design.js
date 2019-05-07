var lengte = prompt ('Vul lengte in','lengte');
var breedte = prompt ('Vul breedte in','breedte');
var tegelrand = prompt ('Vul de breedte van de rand in','tegelrand');
var diepte = prompt ('Vul diepte in (kleiner dan L en b)','diepte');
var lengtePlus = parseInt(lengte) + 2*parseInt(tegelrand);
var breedtePlus = parseInt(breedte) + 2*parseInt(tegelrand);



//bij staande rechthoek is breedte bepalend,bij liggend lengte
//grootste afmeting wordt 500px

if(lengtePlus>=breedtePlus){
    schaal = 500/lengtePlus
}
else {
    schaal = 500/breedtePlus
}

//variabelen voor blauwe rechthoek
var nwbreedte = schaal * breedte;
var nwlengte = schaal * lengte;
var breedtemarge = (600-nwbreedte)/2;
var lengtemarge = (600-nwlengte)/2;
//variabelen voor grijze rechthoek
var nwbreedtePlus = schaal * breedtePlus;
var nwlengtePlus = schaal * lengtePlus;
var breedtemargeplus = (600-nwbreedtePlus)/2;
var lengtemargeplus = (600-nwlengtePlus)/2;
//variabelen voor aanzichten
var nwdiepte = schaal * diepte;
var dieptemarge = (600-nwdiepte)/2;   




var tekst1 = "Gekozen lengte is ";
var tekst2 = ", gekozen breedte is ";
var tekst3 = ", gekozen rand is ";
var koptekst = tekst1.concat(lengte, tekst2,breedte, tekst3, tegelrand);

var tekst4 = "Lengte inclusief randen is ";
var tekst5 = ", breedte inclusief randen is ";
var tekst6 = ".";
var voettekst =tekst4.concat(lengtePlus,tekst5,breedtePlus,tekst6);

var canvas = document.getElementById("plattegrond");

var cty = canvas.getContext("2d");
cty.fillStyle = "#8e876f";
cty.fillRect(0,0,600,600);//grond

cty.fillStyle = "#666677"
cty.fillRect(lengtemargeplus,breedtemargeplus,nwlengtePlus,nwbreedtePlus);

var ctx = canvas.getContext("2d");
ctx.font = "16px Arial";
ctx.fillText(koptekst, 50,20);

ctx.fillStyle = "#01eff9";

ctx.fillRect((lengtemarge),(breedtemarge),nwlengte,nwbreedte);

var vooraanz = document.getElementById("vooraanzicht");
var ctv = vooraanzicht.getContext("2d");
ctv.fillStyle = "#8e876f";
ctv.fillRect(0,dieptemarge,(600),(dieptemarge+nwdiepte));//grond
var ctw = vooraanzicht.getContext("2d");
ctw.fillStyle = "#666677";
ctw.fillRect(breedtemargeplus,(dieptemarge),nwbreedtePlus,10);//rand

var grd = ctv.createLinearGradient(0,(nwdiepte+dieptemarge),dieptemarge,0);
grd.addColorStop(0,"#018fbf");
grd.addColorStop(1,"#01eff9");
// Fill with gradient


ctv.fillStyle = grd;
ctv.fillRect(breedtemarge,dieptemarge,nwbreedte,nwdiepte);//water


var zijaanz = document.getElementById("zijaanzicht");
var ctz = zijaanzicht.getContext("2d");
ctz.fillStyle = "#8e876f";
ctz.fillRect(0,dieptemarge,(600),(dieptemarge+nwdiepte))//grond
ctz.fillStyle = "#666677";
ctz.fillRect(lengtemargeplus,dieptemarge,nwlengtePlus,10);//tegels

var grd = ctv.createLinearGradient(0,(nwdiepte+dieptemarge),dieptemarge,0);
grd.addColorStop(0,"#018fbf");
grd.addColorStop(1,"#01eff9");
// Fill with gradient


ctz.fillStyle = grd;


ctz.fillRect(lengtemarge,dieptemarge,nwlengte,nwdiepte);//water

