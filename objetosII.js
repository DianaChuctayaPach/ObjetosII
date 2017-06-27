var assert = requiere("assert");


function ejerciciosObjetoII(){
  //ejercicio1
  var Ejer1 = {
    prop1:numInicial=[],
    prop2:numFinal =[],

    };
    var n = (Ejer1.prop2+1)/2;
    var suma = Ejer1.prop2*n;
    document.write(suma);
}
var ejercicios = new ejerciciosObjetoII();

describe('Ejercicios ObjetoII', function(){
  describe('Ejercicio 1', function(){
    it('Prueba de [1,10]', function(){
      assert.equal(55, ejercicios.ejercicio1([1,10]));
    });
    it('Prueba de [1,"Hola"]', function(){
      assert.equal(1, ejercicios.ejercicio1([1,"Hola"]));
    });

    });
  });

  });
