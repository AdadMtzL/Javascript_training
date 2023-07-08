//@ts-check

//Los eventos son Basicamente reaccionea a acciones del navegador o del usuario
//Para hacer uso de estos se requiere seleccionar el elmento o nodo que deseamos estar pendientes
//Indicar el evento
//Poner las acciones

//Asignar un evento a un elemento: html event handler, DOM event handlers,DOM Level 2 Handlers

function Animacion ()
{
    var arg = document.getElementById("p1")
    //@ts-ignore
    arg.textContent="Evento"
}
//@ts-ignore
//@ts-ignore
//parrafo.onmouseover = Animacion()
//parrafo.addEventListener('mouseover',Animacion)

//Listeners, son como triggers
//En donde va animación podemos añadir funciones anonimas

/*
Listener sin parametros:
function nombre(e)
{
    car target = e.target
}
var el =document.getElementById('')
el.addEventListener(event,nombre
*/

/*
Listener con parametros 
function nombre(e,arg1,arg2,...)
{
    var taregt e = target
}

var el = document.getElementById('Id')
el.addEventListenner(event,function(e){CheckUsername(e,arg1,arg2,...)},false)
 */