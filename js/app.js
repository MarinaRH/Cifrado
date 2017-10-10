//var phrase=prompt('ingrese frase');                //pedimos que el usuario ingrese su frase.

//creamos la function cipher para cifrar la frase.
function cipher(phrase){
    var StrLet ="";                                  //Creamos el string vacio donde se almacenara losnuevos valores.
    
    for(i=0;i<phrase.length;i++){                    //Recorremosla frase ingresada,Si esta en el rango de MAYUSCULA.
        var Asc = phrase.charCodeAt(i)               //Obtenemos el codigo ASCII de cada letra
        if(Asc>=65 && Asc<=90){                      //Rango para solo las mayusculas
           var NewAsc = (Asc-65 +33)%26 + 65;        // Aplicamos la formula para obtener la nueva position ASCII.
           var Newlet= String.fromCharCode(NewAsc);  //Desciframos  ese nuevo codigo a letra.
           StrLet += Newlet;                         //Almacenamos letra por letra dentro del nuevo String.
        
        }                                            //en caso contrario si es MINUSCULA.
        else if (Asc>=97 && Asc<=122) { 
          var NewAscm = (Asc-97 +33)%26 +97;         //en este caso la formula cambia porque el rango es otro.
          var NewLetm = String.fromCharCode(NewAscm);//Desciframos  ese nuevo codigo a letra.
            StrLet += NewLetm;                      //Almacenamos letra por letra dentro del nuevo String.
        }
      
    }
    return StrLet;                                  //Retornamos el nuevo string con las letras enncriptadas.
}

/*
function decipher(StrAsc){
  for(i=0;i<StrAsc.length;i++){
   var newp = String.fromCharCode(StrAsc);
}
}*/

cipher('MAriNA');
//decipher();