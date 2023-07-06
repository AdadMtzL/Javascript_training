//@ts-check


/**
 * Declaración de una clase en forma de variable
 * Notación literal
 */
var objeto = {
    //Propiedades
    nombre : "Adad",
    AtributoLogico: true,
    AtributoNumerico: 25,

    //Metodos
    //Nombre: función() {}
    //Los metodos son tratados como variables con funciones anonimas
    //Se pueden accedar como objeto [index]
    Imprimir: function ()
    {
        alert(this.nombre+" "+this.AtributoLogico+" "+this.AtributoNumerico)
    },
}

/**
 * Clase secundaraia que es mejoer para declarar que la anterior, de la forma de constructor de objetos
 * @param {string} nombre 
 * @param {Boolean} AtributoLogico 
 * @param {number} AtributoNumerico 
 */
function Clase2(nombre,AtributoLogico,AtributoNumerico)
    {
        this.nombre = nombre
        this.AtributoLogico = AtributoLogico
        this.AtributoNumerico = AtributoNumerico

        this.Imprimir= function ()
        {
            alert(this.nombre+" "+this.AtributoLogico+" "+this.AtributoNumerico)
        }
    }

var instancia = objeto
var instancia2 = new Clase2("Armando",false,44)
function Temp() {
    instancia.Imprimir()
    instancia.nombre = "Actualziado"
    instancia.Imprimir() //Actualización de parametros
    instancia2.Imprimir()
}   

//Se pueden generar arreglos de objetos, mediante la sintaxis var v1[new class(params),new class(params),new class(params),...]
//se accede a ellos mediante v1[index]
//De manera similar s epueden crear objetos de arreglos, poniendo estos como una propiedad