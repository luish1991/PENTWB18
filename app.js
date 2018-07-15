module.exports ={
    invertir:function(cadena){
        if(cadena===""){
            return cadena;
        }
        var len = cadena.length;
        var arr = cadena.split("");
        var result="";
        for(var cont=len-1;cont>=0;cont--){
            result=result+arr[cont];
        }
        return result;
    },
    cubrir:function(cadena){
        const mask = "XXXX-XX-XXXX";
        if(cadena.length!=15){
            throw "Longitud invalida";
        }
        return mask+cadena.substring(12,15);
    },
    cifradoCesar:function(mensaje,desp){
        if(desp===0 || desp===undefined){
            throw "El desplazamiento no puede ser 0 o undefined";
        }
        if(mensaje===""){
            throw "El mensaje no puede ser vacio";
        }
        var arr=[]
        var inf=65;
        var sup=90;
        for(var cont=0;cont<mensaje.length;cont++){
            var num=mensaje.toUpperCase().charCodeAt(cont);
            if(num>=inf && num<=sup){
                 if((num+desp)>sup){
                    num=inf+((num+desp)-sup)-1;
                 }
                 else{
                    num=num+desp;
                }
            }
            arr[cont]=String.fromCharCode(num);
        }
        return arr.join("");
    },
    decifradoCesar:function(mensaje,desp){
        if(desp===0 || desp===undefined){
            throw "El desplazamiento no puede ser 0";
        }
        if(mensaje===""){
            throw "El mensaje no puede ser vacio";
        }
        var arr=[]
        var inf=65;
        var sup=90;
        for(var cont=0;cont<mensaje.length;cont++){
            var num=mensaje.toUpperCase().charCodeAt(cont);
            if(num>=inf && num<=sup){
                if((num-desp)<inf){
                    num=sup-(inf-(num-desp))+1;
                }
                else{
                    num=num-desp;
                }
            }
            arr[cont]=String.fromCharCode(num);
        }
        return arr.join("");
    },
    contar: function(letra,cadena){
        if(cadena===null || cadena==="" || cadena===undefined){
            throw "La cadena no puede estar vacia o ser null";
        }
        if(letra===null || letra==="" || letra===undefined){
            throw "La letra a buscar en la cadena no puede estar vacia o ser null";
        }
        var sum=0;
        var arr=cadena.split("");
        for(var cont=0;cont<cadena.length;cont++){
            if(letra===arr[cont]){
                sum++;
            }
        }
        return sum;
    }

}

