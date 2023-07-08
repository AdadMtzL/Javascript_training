//@ts-check

//Variable global aqui, local dentro de la función

function Saludar() {
    //Decalración de variables
    var today = new Date();
    var hora = today.getHours();
    var saludo
    var mensaje

    if (hora > 18 && hora < 0) 
    {
        saludo = "Buenas Noches"
    } 
    else 
    {
        if (hora > 12 && hora < 18) 
        {
            saludo = "Buenas tardes"    
        } 
        else 
        {
            if (hora > 0 && hora < 12) 
            {
                saludo =" Buenos días"
            }
        }
    }
    saludo += " ,hoy es " + today
    alert(saludo)
    mensaje = "<h3>"+saludo+"</h3>"
    // @ts-ignore
    document.getElementById("p1").innerHTML = mensaje;
}

function Operaciones() 
{
    var n1 = 23;
    var n2 = 44;
    var res = n1*n2;
    alert("La multiplicaciónde 23 y 44 es "+res)
    var num3 = document.getElementById("p1");
    // @ts-ignore
    num3.textContent = "Hay elementos de "+res+" pesos mexicanos"
}

//Los parametros en una función son sin indicar tipo
//Una función sin nombre es anonima como en go
//Función inmediantamente invocada, ocurre cuando solo se ejecuta una vez la lee el compilador
function Arreglos ()
{
    var arr = ['A','E','I','O','U'];
    alert(arr)
    var arreglo = document.getElementById("p1");
    // @ts-ignore
    arreglo.textContent = "Longitud del arreglo: "+arr.length;

    //función anonima e 
    var extra = (function () {
        alert("función anonima e inmediatamente invocada ejecutada")
    }())
}
 /*
 Un tipode variable o forma de asignar los valores a una variable es mediante la siguiente:
 var nombre = (var1/value || var2/value || ... || varn/value)
 Se llaman shortcircuit values, en si son ciando algo falla se asigna el valor soguiente
 Se pueden declarar como objetos si se le coloca ka estructura adecuada 
 Por ejemplo
 var1 = false
 var v2 = (var1 || {})
 dentro de los corchtes declarar el objeto adecuadamente
 */