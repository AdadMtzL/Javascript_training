//@ts-check

function 
{
    var estilo = document.getElementById("BPrincipal")
    //@ts-ignore
    estilo.css(
        {
            'background-color':'#FAF9F8',
            'text-align':'center',
            'font-family': 'Times New Roman'            
        }
    )
    const hijo1 = "<h1>"+"Bienvenido a la pagina principal"+"</h1>"
    estilo?.after()
}

function Cargar()
{
    var elemento = document.getElementById("Texto_Magico")
    elemento?.animate
}
function Desaparecer()
{
    var elemento = document.getElementById("Texto_Magico")
}