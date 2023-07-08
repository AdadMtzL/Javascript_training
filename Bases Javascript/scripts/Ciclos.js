//@ts-check
function Dormir1s () 
{
    return new Promise(Respuesta => setTimeout(Respuesta,1000));
}

async function CountDown10() 
{
    var cambiable = document.getElementById("p1")
    for (var nom=10;nom>=0;nom--)
    {
        //@ts-ignore
        cambiable.textContent = nom
        await Dormir1s();
    }
    var n2 = 0
    while (n2<11)
    {
        //@ts-ignore
        cambiable.textContent = n2
        n2++
        await Dormir1s();
    }
}