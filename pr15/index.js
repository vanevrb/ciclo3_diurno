    // Este es un comentario
    // Estas son las alertas
    // Esta es una variable:
    var numero1 = 3;
    var numero2 = 2;
    var numero3 = 4;
    var suma = numero1 + numero2;
    var multiplicacion = numero1 * numero2;
    // alert(multiplicacion);
    var exponen = 3;

    console.log(numero1);
    console.log(numero2);
    console.log("La suma de los dos numeros es " + suma);
    console.log(" 3 a la 3");
    console.log(3 ** exponen);
    var nombre = "Vanessa"
    console.log("Soy ${nombre}")
    console.log(`Soy ${nombre}`);
    var a, b, c;

    a = 1;
    b = 2;
    c = a + b;

    console.log("La operacion de " + a + "+" + b + " da como resultado " + c);
    const valor_pi = Math.PI;


    //  console.log(valor_a); index.js:30 Uncaught ReferenceError: Cannot access 'valor_a' before initialization
    // console.log(valor_b); undefined

    let valor_a = "Carolina";
    var valor_b = "Carolina";

    // this

    /* If*/
    if (5 != 3) {
        console.log("Es diferente");
    } else {
        console.log("No es diferente");
    }
    /* Fechas */
    let date = new Date();
    console.log("La fecha de hoy es " + date);
    /* Ciclos */

    /*
    While
    For
    Do while
    */
    var init = 0;
    /* for ( st1; st2;st3)
    Mas info https://www.w3schools.com/js/js_loop_for.asp
    */
    for (let i = 0; i < 12; i++) {
        console.log("El valor de init en el for es " + init);
        init++;
    }
    var init2 = 0;
    while (init2 < 10) {
        console.log("El valor de init2 en el while es" + init2);
        init2++;
    }

    let init3 =0;
    do{
        init3++;
        console.log("El valor de init3 en el do while es" + init3)
    }while (init3 < 10);
    

    /*
    switch

    */
   var dia = 4;
   switch(dia){
       case 1:
           console.log("Lunes");
        break;
        case 2:
            console.log("Martes");
         break;
         case 3:
            console.log("Miercoles");
         break;
         case 4:
            console.log("Jueves");
         break;
   }

    /*
    POO?

    Clases
    constructor
    Objecto (atributos)
    */

    class Persona {
        constructor(nombre, apellido){
            this.nombre = nombre;
            this.apellido = apellido;
        }
    }

    /**/
   console.clear(); 

   let listadecompra=["Papa","Higado","Yuca","Papaya","Cereal","Guanabana","Maracuya","Arroz","Brocoli"];
   
   /*Funciones*/
   var n1 = 20, n2 =3, nombre="Vanessa";

   function multiplique(){
       return n1*n2;
   }

   console.log(multiplique());

   function getScore(){
       var n1=2, n=3;
       function add(){
           return nombre + " anotó " + (n1+n2);
       }
       return add();
   }

   console.log(getScore());
  // listadecompra.forEach()

  function escribirBienvenida(nombre){
      var mensaje ="Buenos dias,"+nombre;
      document.write("<h1>"+mensaje+"</h1>");
  }
  escribirBienvenida("Vanessa");