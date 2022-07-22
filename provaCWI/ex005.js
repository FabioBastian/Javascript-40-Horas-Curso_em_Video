function calculaCaminho(mapa){
    var mapas = []

    for (let c = 0; c < mapa.length; c++) {
        const element = mapa[c];
        mapas = mapa[c]
        for (let c = 0; c < mapas.length; c++) {
            if (mapas[c] == "X"){
                var achei = c
            }
            
        }
        console.log(mapas)
        console.log(achei)
    }
    







    
   }
 
   console.log(calculaCaminho(["O++++++++XXXXXXX", "XXXXXXXX+++++++D"]))