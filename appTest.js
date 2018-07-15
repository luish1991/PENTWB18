var cad = require("./app");

var assert = require('assert');

describe("Probando libreria",function(){
    it("Invirtiendo cadena",function(){
        assert.equal(cad.invertir("luis"),"siul");
    });
    it("Cubrir numero",function(){
        assert.equal(cad.cubrir("1234-12-9876-12"),"XXXX-XX-XXXX-12")
    });
    it("Cifrado Cesar de Texto",function(){
        assert.equal(cad.cifradoCesar("WIKIPEDIA, LA ENCICLOPEDIA LIBRE",6),"COQOVKJOG, RG KTIOIRUVKJOG ROHXK");
    });
    it("Descifrado Cesar de Texto",function(){
        assert.equal(cad.decifradoCesar("COQOVKJOG, RG KTIOIRUVKJOG ROHXK",6),"WIKIPEDIA, LA ENCICLOPEDIA LIBRE");
    });
    it("Contando cuantas veces aparece una letra en una cadena",function(){
        assert.equal(cad.contar("c","Putting a comma after the last element is inconsistent across browsers."),3);
    });
});