//@ts-check

/**
 * Los objetos on como las clases en java, mismoa lógica
 * Se declaran como variables
 */

var objeto = {
    //Propiedades
    nombre : String,
    AtributoLogico: Boolean,
    AtributoNumerico: Number,

    //Metodos
    //Nombre: función() {}
    Iniciar: function (/** @type {StringConstructor} */ Cadena,/** @type {BooleanConstructor} */ Estado,/** @type {NumberConstructor} */ Numero)
    {
        this.AtributoLogico = Estado
        this.AtributoNumerico = Numero
        this.nombre = Cadena
    },  //Los metodos son tratados como variables con funciones anonimas
    Imprimir: function ()
    {
        alert(this.nombre+" "+this.AtributoLogico+" "+this.AtributoNumerico)
    }
};