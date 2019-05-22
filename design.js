// var lengte = prompt ('Vul lengte in','lengte');
// var breedte = prompt ('Vul breedte in','breedte');
// var tegelrand = prompt ('Vul de breedte van de rand in','tegelrand');
// var diepte = prompt ('Vul diepte in)','diepte');

function toonResultaat(){
            inputVerwerking();
            
            bepaalSchaal();
            berekenGegevens();
            maakPlattegrond();
            maakVooraanzicht();
            maakZijaanzicht();
       


}


function inputVerwerking()
    {
        lengte = document.getElementById("lengte").value;//var is niet nodig binnen functie
        breedte = document.getElementById("breedte").value;
        diepte = document.getElementById("diepte").value;
        tegelrand = document.getElementById("rand").value;
        marge = document.getElementById("marge").value;//afstand water tot bovenkant zwembad
    


    // document.getElementById("resLen").innerHTML = lengte;
    // document.getElementById("resDiep").innerHTML = diepte;
    // document.getElementById("resRand").innerHTML = tegelrand;
    // document.getElementById("resBre").innerHTML = breedte;
    // document.getElementById("resMar").innerHTML = marge;

    
        lengtePlus = parseFloat(lengte) + 2*parseFloat(tegelrand);
        breedtePlus = parseFloat(breedte) + 2*parseFloat(tegelrand);
    }
// function inputVerwerkingPlus(waarde){
//     waarde = document.getElementById("waarde").value;


// }


    //heeft lengte of breedte of diepte de grootste afmeting
    //grootste afmeting wordt 500px
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
            nwmarge = schaal*marge; 
    }

    function tekenRechthoek(ctx,kl1,bgx,bgy,l,b){
            ctx.fillStyle = kl1;
            ctx.fillRect(bgx,bgy,l,b);

    }

    function tekenGradRechthoek(ctx,kl1,kl2,bgx,bgy,l,b){
            
        grd = ctx.createLinearGradient(bgx,bgy,bgx,(bgy+b));//verticaal verloop
        grd.addColorStop(0,kl1);
        grd.addColorStop(1,kl2);
        ctx.fillStyle = grd;
        ctx.fillRect(bgx,bgy,l,b);
            
    }

    function tekenDiagGradRechthoek(ctx,kl1,kl2,bgx,bgy,l,b){
            
        grd = ctx.createLinearGradient(bgx+l,bgy,bgx,(bgy+b));//diagonaal verloop
        grd.addColorStop(0,kl1);
        grd.addColorStop(1,kl2);
        ctx.fillStyle = grd;
        ctx.fillRect(bgx,bgy,l,b);
            
    }




    function maakPlattegrond(){
            var platt = document.getElementById("plattegrond");
            var cty = platt.getContext("2d");
            
            tekenGradRechthoek(cty,"#8e876f","#8e876f",0,0,600,600);//grond
            tekenGradRechthoek(cty,"#666677","#666677",lengtemargeplus,breedtemargeplus,nwlengtePlus,nwbreedtePlus);//vloer plus rand
            // tekenRechthoek(cty,"#01eff9",lengtemarge,breedtemarge,nwlengte,nwbreedte);//water
            tekenDiagGradRechthoek(cty,"#01eff9","#018fbf",lengtemarge,breedtemarge,nwlengte,nwbreedte);
            // cty.fillStyle = "#8e876f";
            // cty.fillRect(0,0,600,600);//grond
            // cty.fillStyle = "#666677"
            // cty.fillRect(lengtemargeplus,breedtemargeplus,nwlengtePlus,nwbreedtePlus);//rand
    //         var ctx = platt.getContext("2d");
            
    //         ctx.fillStyle = "#01eff9";
    //         ctx.fillRect((lengtemarge),(breedtemarge),nwlengte,nwbreedte);//water
    // 
            }

    function maakVooraanzicht(){
                var vooraanz = document.getElementById("vooraanzicht");
                var ctv = vooraanz.getContext("2d");
                // ctv.fillStyle = "#cceecc";//groen
                // ctv.fillRect(0,0,600,600);
                // ctv.fillStyle = "#8e876f";//bruin
                // ctv.fillRect(0,dieptemarge,(600),(dieptemarge+nwdiepte));
                // var ctw = vooraanzicht.getContext("2d");
                // ctw.fillStyle = "#666677";
                // ctw.fillRect(breedtemargeplus,(dieptemarge),nwbreedtePlus,10);//rand

                
                // ctv.fillStyle = "#666677";
                // ctv.fillRect((breedtemarge-10),dieptemarge,(nwbreedte+20),(nwdiepte+10));//doorsnede
                // // ctv.fillStyle = "#dddddd";
                // // ctv.fillRect((breedtemarge),dieptemarge,(nwbreedte),(nwdiepte));//wand 
                tekenGradRechthoek(ctv,"#cceecc","#cceecc",0,0,600,dieptemarge);//groen
                tekenGradRechthoek(ctv,"#8e876f","#8e876f",0,dieptemarge,600,(dieptemarge+nwdiepte));//bruin
                tekenGradRechthoek(ctv,"#666677","#666677",breedtemargeplus,dieptemarge,nwbreedtePlus,10);//grijs
                tekenGradRechthoek(ctv,"#666677","#666677",(breedtemarge-10),dieptemarge,nwbreedte+20,nwdiepte+10);//doorsnede


                tekenGradRechthoek(ctv,"#dddddd","#dddddd",(breedtemarge),dieptemarge,(nwbreedte),(nwdiepte));//wand
                tekenGradRechthoek(ctv,"#01eff9","#018fbf",breedtemarge,(dieptemarge+nwmarge),nwbreedte,(nwdiepte-nwmarge));//water
                // grd = ctv.createLinearGradient(0,(nwdiepte+dieptemarge+nwmarge),0,dieptemarge-nwmarge);
                // grd.addColorStop(0,"#018fbf");
                // grd.addColorStop(1,"#01eff9");
                // // ctv.globalAlpha = 0.8;//transparantie
                // ctv.fillStyle = grd;
                // ctv.fillRect(breedtemarge,(dieptemarge+nwmarge),nwbreedte,(nwdiepte-nwmarge));//water
    }
     function maakZijaanzicht(){     
                    var zijaanz = document.getElementById("zijaanzicht");
                    var ctz = zijaanz.getContext("2d");
                    ctz.fillStyle = "#cceecc";
                    ctz.fillRect(0,0,600,600);//groen
                    ctz.fillStyle = "#8e876f";
                    ctz.fillRect(0,dieptemarge,(600),(dieptemarge+nwdiepte));//grond
                    ctz.fillStyle = "#666677";
                    ctz.fillRect(lengtemargeplus,dieptemarge,nwlengtePlus,10);//tegels
                    
                    ctz.fillStyle = "#666677";
                    ctz.fillRect((lengtemarge-10),dieptemarge,(nwlengte+20),(nwdiepte+10));//doorsnede

                    ctz.fillStyle = "#dddddd";
                    ctz.fillRect(lengtemarge,dieptemarge,nwlengte,nwdiepte);//wand
                 tekenGradRechthoek(ctz,"#01eff9","#018fbf",lengtemarge,(dieptemarge+nwmarge),nwlengte,(nwdiepte-nwmarge));   
                    // ctz.globalAlpha = 0.8;//transparantie
                    // ctz.fillStyle = grd;//gradient
                    // ctz.fillRect(lengtemarge,(dieptemarge+nwmarge),nwlengte,(nwdiepte-nwmarge));//water

                      
                }
                document.getElementById("demo").innerHTML = breedte.value;   //buiten de functie!