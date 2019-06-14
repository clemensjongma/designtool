
function toonResultaat(){

            inputVerwerking();
            bepaalSchaal();
            berekenGegevens();
            maakPlattegrond();
            maakVooraanzicht();
            maakZijaanzicht();
            zetGegevensOmNaarIsom();
            bepaalSchaalIsom();
            berekenGegevensIsom();
            maakIsomProjectie();
 }


function inputVerwerking(){

        lengte = document.getElementById("lengte").value;//var is niet nodig binnen functie
        breedte = document.getElementById("breedte").value;
        diepte = document.getElementById("diepte").value;
        tegelrand = document.getElementById("rand").value;
        marge = document.getElementById("marge").value;//afstand water tot bovenkant zwembad
        //berekeningen:
        lengtePlus = parseFloat(lengte) + 2*parseFloat(tegelrand);
        breedtePlus = parseFloat(breedte) + 2*parseFloat(tegelrand);
    }


    
    function bepaalSchaal(){

            if(lengtePlus>=breedtePlus && lengtePlus>=diepte){
                schaal = 500/lengtePlus
            }
                else if (breedtePlus>=diepte){
                    schaal = 500/breedtePlus
                }
                    else {
                        schaal = 500/diepte 
                    }
                }

    function berekenGegevens(){        
            //variabelen voor blauwe rechthoek
            nwbreedte = schaal * breedte;
            nwlengte = schaal * lengte;
            breedtemarge = (600-nwbreedte)/2;
            lengtemarge = (600-nwlengte)/2;
            //variabelen voor grijze rechthoek
            nwbreedtePlus = schaal * breedtePlus;
            nwlengtePlus = schaal * lengtePlus;
            breedtemargeplus = (600-nwbreedtePlus)/2;
            lengtemargeplus = (600-nwlengtePlus)/2;
            //variabelen voor aanzichten
            nwdiepte = schaal * diepte;
            dieptemarge = (600-nwdiepte)/2;
            nwmarge = schaal*marge;//afstand water-bovenkant zwembad
            }


    function tekenGradRechthoek(ctx,kl1,kl2,bgx,bgy,l,b){
            
            grd = ctx.createLinearGradient(bgx,bgy,bgx,(bgy+b));//verticaal verloop
            grd.addColorStop(0,kl1);
            grd.addColorStop(1,kl2);//als kl1=kl2 dan egale rechthoek!
            ctx.fillStyle = grd;
            ctx.fillRect(bgx,bgy,l,b);
            
    }

    function tekenDiagGradRechthoek(ctx,kl1,kl2,bgx,bgy,l,b){
            
            grd = ctx.createLinearGradient(bgx+l,bgy,bgx,(bgy+b));//diagonaal verloop, voor plattegrond
            grd.addColorStop(0,kl1);
            grd.addColorStop(1,kl2);
            ctx.fillStyle = grd;
            ctx.fillRect(bgx,bgy,l,b);
            
    }

    function maakPlattegrond(){
            var platt = document.getElementById("plattegrond");
            var cty = platt.getContext("2d");
            
                tekenGradRechthoek(cty,"#cceecc","#cceecc",0,0,600,600);//grond
                tekenGradRechthoek(cty,"#666677","#666677",lengtemargeplus,breedtemargeplus,nwlengtePlus,nwbreedtePlus);//vloer plus rand
                tekenDiagGradRechthoek(cty,"#01eff9","#018fbf",lengtemarge,breedtemarge,nwlengte,nwbreedte);//water
            }

    function maakZijaanzicht(){     
            var zijaanz = document.getElementById("zijaanzicht");
            var ctz = zijaanz.getContext("2d");

                tekenGradRechthoek(ctz,"#cceecc","#cceecc",0,0,600,dieptemarge);//groen   
                tekenGradRechthoek(ctz,"#8e876f","#d2cfc6",0,dieptemarge,600,(dieptemarge+nwdiepte));//grond   
                tekenGradRechthoek(ctz,"#666677","#666677",lengtemargeplus,dieptemarge,nwlengtePlus,10); //tegels  
                tekenGradRechthoek(ctz,"#666677", "#666677",lengtemarge-10,(dieptemarge),nwlengte+20,(nwdiepte+10));//doorsnede   
                tekenGradRechthoek(ctz,"#dddddd","#dddddd",lengtemarge,dieptemarge,nwlengte,nwdiepte);//wand
                tekenGradRechthoek(ctz,"#01eff9","#018fbf",lengtemarge,(dieptemarge+nwmarge),nwlengte,(nwdiepte-nwmarge));//water 
            
            
    }

    function maakVooraanzicht(){
            var vooraanz = document.getElementById("vooraanzicht");
            var ctv = vooraanz.getContext("2d");
            
                tekenGradRechthoek(ctv,"#cceecc","#cceecc",0,0,600,dieptemarge);//groen
                tekenGradRechthoek(ctv,"#8e876f","#d2cfc6",0,dieptemarge,600,(dieptemarge+nwdiepte));//bruin
                tekenGradRechthoek(ctv,"#666677","#666677",breedtemargeplus,dieptemarge,nwbreedtePlus,10);//grijs
                tekenGradRechthoek(ctv,"#666677","#666677",(breedtemarge-10),dieptemarge,nwbreedte+20,nwdiepte+10);//doorsnede
                tekenGradRechthoek(ctv,"#dddddd","#dddddd",(breedtemarge),dieptemarge,(nwbreedte),(nwdiepte));//wand
                tekenGradRechthoek(ctv,"#01eff9","#018fbf",breedtemarge,(dieptemarge+nwmarge),nwbreedte,(nwdiepte-nwmarge));//water
                
            }

     


                

    function zetGegevensOmNaarIsom(){
                berSin = Math.sin(30*Math.PI/180);//sinus van 30 gr
                berCos = Math.cos(30*Math.PI/180);//cosinus van 30 gr
        
                    horiAfmPlus=breedtePlus*(berCos)+lengtePlus*(berCos);
                    horiAfm=breedte*(berCos)+lengte*(berCos);
                    vertiAfmPlus=parseFloat(diepte)+breedtePlus*(berSin)+lengtePlus*(berSin);
                    vertiAfm=parseFloat(diepte)+breedte*(berSin)+lengte*(berSin);
    }

    function bepaalSchaalIsom(){
            if (horiAfmPlus >= vertiAfm){
                schaalIsom = 500/horiAfmPlus}
            else {schaalIsom = 500/vertiAfm}
    }

    function berekenGegevensIsom(){
                    nwHoriAfm = schaalIsom * horiAfm;
                    nwhoriAfmPlus = schaalIsom * horiAfmPlus;
                    nwVertiAfm = schaalIsom * vertiAfm;
                    nwVertiAfmPlus = schaalIsom * vertiAfmPlus;
                    
                    breedtemargeIsom = (600-nwHoriAfm)/2;
                    breedtemargeIsomPlus = (600-nwhoriAfmPlus)/2;
                    
                    lengtemargeIsom = (600-nwVertiAfm)/2;
                    lengtemargeIsomPLus = (600-nwVertiAfmPlus)/2;

                    nwDiepteIsometrie= schaalIsom*diepte;
                    nwWaterMarge=schaalIsom*marge;
    }
   
    function maakIsomProjectie(){
                berSin = Math.sin(30*Math.PI/180);//sinus van 30 gr
                berCos = Math.cos(30*Math.PI/180);//cosinus van 30 gr


                var isom = document.getElementById("isomproj");
                        var ctv = isom.getContext("2d");
                        ctv.clearRect(0,0,600,600);       
                
                tekenGradRechthoek(ctv,"#cceecc","#8e876f",0,0,600,600);
                tekenZeshoek(ctv,"#018fbf",breedtemargeIsom,lengtemargeIsom,breedte,lengte,diepte);//omtrek watervolume
                tekenZeshoek(ctv,"#666677",breedtemargeIsomPlus,lengtemargeIsomPLus,breedtePlus,lengtePlus,0);//tegels
                tekenRuit(ctv,breedtemargeIsom,(lengtemargeIsom),breedte,lengte);//middengedeelte uitgegumd
                tekenZeshoek(ctv,"#d1e0e0",breedtemargeIsom,lengtemargeIsom,breedte,lengte,diepte);//binnenvorm alleen zichtbaar in uitgegumd gedeelte
                tekenZeshoek(ctv,"#01eff9",breedtemargeIsom,lengtemargeIsom+nwWaterMarge,breedte,lengte,0);//waternivo
                
    }
    
    function tekenRuit(cti,bgx,bgy,br,le){//gebruik ik even om te gummen
                var horiAfmRechth=berCos*br+berCos*le;
                var vertiAfmRechth=berSin*br+berSin*le;

                cti.translate(bgx,bgy);
                cti.beginPath();
                cti.moveTo(0,schaalIsom*br*berSin);
                cti.lineTo(schaalIsom*berCos*br,0);
                cti.lineTo( schaalIsom*horiAfmRechth,schaalIsom*berSin*le);
                cti.lineTo(schaalIsom* le*berCos,schaalIsom*vertiAfmRechth);
                cti.closePath();
                cti.translate(-bgx,-bgy);
                cti.clip();

    }

    function tekenZeshoek(cti,kl,bgx,bgy,br,le,dp){
            var horiAfmRechth=berCos*br+berCos*le;
            var vertiAfmRechth=berSin*br+berSin*le+parseFloat(dp);
     

                cti.translate(bgx,bgy);
                cti.beginPath();
                cti.moveTo(0,schaalIsom*br*berSin);
                cti.lineTo(schaalIsom*berCos*br,0);
                cti.lineTo(schaalIsom*horiAfmRechth,schaalIsom*berSin*le);
                cti.lineTo(schaalIsom*horiAfmRechth,schaalIsom*(berSin*le+parseFloat(dp)));
                cti.lineTo(schaalIsom*berCos*le,schaalIsom*vertiAfmRechth);
                cti.lineTo(0,schaalIsom*(vertiAfmRechth-berSin*le));
                cti.fillStyle=kl;
                cti.fill();
                cti.closePath();
                cti.translate(-bgx,-bgy);
        

}