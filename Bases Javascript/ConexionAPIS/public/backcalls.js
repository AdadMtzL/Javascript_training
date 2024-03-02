//http://localhost:1244/
//node v16.0.0

/**
 * Método para hacer que se tenga un delay de un segundo para el timer de sesion
 * @returns Promise
 */
function dr1s()
{
    return new Promise(Response => setTimeout(Response,1000));
}

/**
 * Método para que la pagina tenga un timer de horas de ser necesario
 */
async function timerPag()
{
    var dvrel = document.getElementById("Reloj");
    var segundos = 0;
    var minutos = 0;
    var horas = 0;
    while(true)
    {
        dvrel.textContent = 'Tiempo de sesion '+horas+':'+minutos+':'+segundos;
        await dr1s();
        segundos+=1;
        if(segundos == 61)
        {
            minutos+=1;
            segundos = 1;
        }
        if(minutos ==61)
        {
            horas+=1;
            minutos = 0;
        }
    }
}

/*************************************** Metodos Api 2 *****************************************/

/**
 * Metodo que se encarga de mostrar el formulario de la Api 2
 */
function Api2()
{

    var contenidos = document.getElementById('inicial');   
    //creación de los elementos del div
    var espacio = document.createElement('br');
    var titulo  = document.createElement('h2');
    var etiqueta = document.createElement('label');
    var entrada = document.createElement('input');
    var accion = document.createElement('button');
    //modificación del div 
    contenidos.innerHTML = " ";
    //adición de las caracteristicas de cada elemento del div
    titulo.textContent = "Api Busqueda de datos de libros";
    entrada.setAttribute("type","text");
    entrada.setAttribute("placeholder","El arte de la guerra");
    entrada.setAttribute("id","libro");
    entrada.setAttribute("name","libro");
    etiqueta.setAttribute("for","libro");
    etiqueta.textContent = "Nombre del Libro: ";
    accion.textContent = "Buscar libro";
    accion.setAttribute("id","call1");
    accion.setAttribute("onclick","llamadaApi2()");
    //adición de los elementos al div
    contenidos.appendChild(espacio);
    contenidos.appendChild(titulo);
    contenidos.appendChild(espacio);
    contenidos.appendChild(etiqueta);
    contenidos.appendChild(entrada);
    contenidos.appendChild(espacio);
    contenidos.appendChild(accion);
    var reloj = document.getElementById('Reloj');
    reloj.style.marginTop = "90%";
}

/**
 * Método usado para hacer la petición ajax hacia la Api, es post para enviar datos
 */
function llamadaApi2()
{
    var valor_libro = document.getElementById('libro').value;
    if (valor_libro === null || valor_libro == "")
    {
        alert("valor invalido");
    }
    else
    {
        var AJAXpetition1 = new XMLHttpRequest();
        AJAXpetition1.open('POST','/api2',true);
        AJAXpetition1.setRequestHeader('Content-Type','application/json;charset=UTF-8');
        AJAXpetition1.onerror = function()
        {
            alert("Petición a la API fallida");
        }
        AJAXpetition1.onreadystatechange = function()
        {
            if (AJAXpetition1.readyState == 4 && AJAXpetition1.status == 200)
            {
                var Response = JSON.parse(AJAXpetition1.responseText);
                try
                {
                    var libros_encontrados = Response.resultados;
                    if(libros_encontrados.length == 0)
                    {
                        alert('No se han encontrado resultados');
                    }
                    else
                    {
                        var contenedor = document.getElementById('inicial');
                        listarLibros(libros_encontrados,contenedor);
                    }
                }
                catch (e)
                {
                    alert(e);
                }
            }
            else
            {
                if(AJAXpetition1.readyState == 4 && AJAXpetition1.status == 404)
                {
                    alert('No se pudo completar la petición');
                }
            }
        }
        AJAXpetition1.send(JSON.stringify({Libro: valor_libro}))
    }
}

/**
 * Método usado para crear la tabla en el sitio
 * @param {*} libros 
 * @param {*} contenedor 
 */
function listarLibros(libros,contenedor)
{
    var tabla = document.createElement('table');
    var filaTitulo = document.createElement('tr');

    var espacio = document.createElement('br');
    var espacio1 = document.createElement('br');
    var columnaAutor = document.createElement('td');
    var columnatitulo = document.createElement('td');
    var columnaPublicacion = document.createElement('td');
    var columnalenguajes = document.createElement('td');
    var columnaNoPags = document.createElement('td');
    var columnapublicadores = document.createElement('td');
    var columnatema = document.createElement('td');

    columnaAutor.textContent = "Autores del libro";
    columnatitulo.textContent = "Titulo del libro";
    columnaPublicacion.textContent = "Año de publicación";
    columnalenguajes.textContent = "lenguajes disponibles";
    columnaNoPags.textContent = "No de paginas";
    columnapublicadores.textContent = "Imprentas";

    filaTitulo.appendChild(columnaAutor);
    filaTitulo.appendChild(columnatitulo);
    filaTitulo.appendChild(columnaPublicacion);
    filaTitulo.appendChild(columnalenguajes);
    filaTitulo.appendChild(columnaNoPags);
    filaTitulo.appendChild(columnapublicadores);
    
    tabla.appendChild(filaTitulo);

    contenedor.appendChild(espacio);
    contenedor.appendChild(espacio1);
    anadirDatos(libros,tabla);
    contenedor.appendChild(tabla);
    var reloj = document.getElementById('Reloj');
    reloj.style.marginTop = "2%";
}

/**
 * método usado par aañador los libros a la lista
 * @param {*} libros 
 * @param {*} tabla 
 */
function anadirDatos(libros,tabla)
{
    libros.forEach(element => 
    {
    var filaDatos = document.createElement('tr');

    var columnaAutor = document.createElement('td');
    var columnatitulo = document.createElement('td');
    var columnaPublicacion = document.createElement('td');
    var columnalenguajes = document.createElement('td');
    var columnaNoPags = document.createElement('td');
    var columnapublicadores = document.createElement('td');
    var columnatema = document.createElement('td');
    
    if (element.author_name != null) 
    {
        columnaAutor.textContent = element.author_name;    
    } 
    else 
    {
        columnaAutor.textContent = "No disponible";
    }

    if (element.title != null) 
    {
        columnatitulo.textContent = element.title;
    } 
    else 
    {
        columnatitulo.textContent = "No disponible";
    }
    
    if (element.first_publish_year != null) 
    {
        columnaPublicacion.textContent = element.first_publish_year;
    } 
    else 
    {
        columnaPublicacion.textContent = "No disponible";
    }

    if (element.language != null) 
    {
        columnalenguajes.textContent = element.language;
    } 
    else 
    {
        columnalenguajes.textContent = "No disponible";
    }

    if (element.number_of_pages_median != null) 
    {
        columnaNoPags.textContent = element.number_of_pages_median;
    } 
    else 
    {
        columnaNoPags.textContent = "No disponible";
    }
    
    if (element.publisher != null) 
    {
        columnapublicadores.textContent = element.publisher;
    } 
    else 
    {
        columnapublicadores.textContent = "No disponible";
    }
    filaDatos.appendChild(columnaAutor);
    filaDatos.appendChild(columnatitulo);
    filaDatos.appendChild(columnaPublicacion);
    filaDatos.appendChild(columnalenguajes);
    filaDatos.appendChild(columnaNoPags);
    filaDatos.appendChild(columnapublicadores);
    
    tabla.appendChild(filaDatos);    
    });
}
/************************************** Metodos Api 3 *******************************************/

/**
 * Método usado para mostrar el formulario de la Api3
 */
function Api3()
{
    var contenidos = document.getElementById('inicial');   
    //creación de los elementos del div
    var espacio = document.createElement('br');
    var titulo  = document.createElement('h2');
    var accion = document.createElement('button');
    //modificación del div 
    contenidos.innerHTML = " ";
    //adición de las caracteristicas de cada elemento del div
    titulo.textContent = "Api Listado de los paises del mundo";
    accion.textContent = "Listar paises";
    accion.setAttribute("id","call1");
    accion.setAttribute("onclick","llamadaApi3()");
    //adición de los elementos al div
    contenidos.appendChild(espacio);
    contenidos.appendChild(titulo);
    contenidos.appendChild(espacio);
    contenidos.appendChild(accion);
    var reloj = document.getElementById('Reloj');
    reloj.style.marginTop = "90%";
}

/**
 * Método usado para hacer la petcición a la Api3 con AJAX
 */
function llamadaApi3()
{
        var AJAXpetition3 = new XMLHttpRequest();
            AJAXpetition3.open('POST','/api3',true);
            AJAXpetition3.setRequestHeader('Content-Type','application/json;charset=UTF-8');
            AJAXpetition3.onerror = function()
            {
                alert("Petición a la API fallida");
            }
            AJAXpetition3.onreadystatechange = function()
            {
                if (AJAXpetition3.readyState == 4 && AJAXpetition3.status == 200)
                {
                    var Response = JSON.parse(AJAXpetition3.responseText);
                    try
                    {
                        paises = Response.resultados;
                        //alert(paises[0].name_en);
                        var contenedor = document.getElementById('inicial');
                        listarPaises(paises,contenedor);
                    }
                    catch (e)
                    {
                        alert(e);
                    }
                }
                else
                {
                    if(AJAXpetition3.readyState == 4 && AJAXpetition3.status == 404)
                    {
                        alert('No se pudo completar la petición');
                    }
                }
            }
            AJAXpetition3.send()
}

/**
 * Método para crear una lista con los datos obtenidos de la API.
 * @param {*} lista 
 * @param {*} contenedor 
 */
function listarPaises (lista, contenedor)
{
    lista_principal = document.createElement('ol');

    lista.forEach(elemento => { 
        elemento_lista = document.createElement('li');
        elemento_lista.textContent = elemento.name_en;
        lista_principal.appendChild(elemento_lista);
    });

    contenedor.appendChild(lista_principal);
    var reloj = document.getElementById('Reloj');
    reloj.style.marginTop = "2%";
}
/******************************************* Metodos Api 4 **************************************/

/**
 * Método para mostrar el formulario para la Api4
 */
function Api4()
{
    var contenidos = document.getElementById('inicial');   
    //creación de los elementos del div
    var espacio = document.createElement('br');
    var titulo  = document.createElement('h2');
    var etiqueta = document.createElement('label');
    var entrada = document.createElement('input');
    var accion = document.createElement('button');
    //modificación del div 
    contenidos.innerHTML = " ";
    //adición de las caracteristicas de cada elemento del div
    titulo.textContent = "Api Busqueda de personajes de rick y morty";
    entrada.setAttribute("type","number");
    entrada.setAttribute("placeholder","826");
    entrada.setAttribute("id","personaje");
    entrada.setAttribute("name","personaje");
    entrada.setAttribute("min","1");
    entrada.setAttribute("max","826");
    etiqueta.setAttribute("for","personaje");
    etiqueta.textContent = "Número de personaje: ";
    accion.textContent = "Buscar personaje";
    accion.setAttribute("id","call1");
    accion.setAttribute("onclick","llamadaApi4()");
    //adición de los elementos al div
    contenidos.appendChild(espacio);
    contenidos.appendChild(titulo);
    contenidos.appendChild(espacio);
    contenidos.appendChild(etiqueta);
    contenidos.appendChild(entrada);
    contenidos.appendChild(espacio);
    contenidos.appendChild(accion);
    var reloj = document.getElementById('Reloj');
    reloj.style.marginTop = "90%";
}

/**
 * Método para hacer la peticion AJAX a la api 4
 */
function llamadaApi4()
{
    var valor_personaje = document.getElementById('personaje').value;
    if (valor_personaje < 1 || valor_personaje > 826 || valor_personaje === null)
    {
        alert("valor invalido");
    }
    else
    {
        var AJAXpetition2 = new XMLHttpRequest();
        AJAXpetition2.open('POST','/api4',true);
        AJAXpetition2.setRequestHeader('Content-Type','application/json;charset=UTF-8');
        AJAXpetition2.onerror = function()
        {
            alert("Petición a la API fallida");
        }
        AJAXpetition2.onreadystatechange = function()
        {
            if (AJAXpetition2.readyState == 4 && AJAXpetition2.status == 200)
            {
                var Response = JSON.parse(AJAXpetition2.responseText);
                try
                {
                    var respPeticion = Response.resultados;
                    var contenedor = document.getElementById('inicial');
                    mostrarPersonaje(respPeticion,contenedor);
                }
                catch (e)
                {
                    alert(e);
                }
            }
            else
            {
                if(AJAXpetition2.readyState == 4 && AJAXpetition2.status == 404)
                {
                    alert('No se pudo completar la petición');
                }
            }
        }
        AJAXpetition2.send(JSON.stringify({Numero : valor_personaje}))
    }
}

/**
 * Método que se usa para mostrar los datos obtenidos de la API
 * @param {*} datos 
 * @param {*} contenedor 
 */
function mostrarPersonaje(datos,contenedor)
{
    var imagen_per = document.createElement('img');
    var especie = document.createElement('p');
    var nombre = document.createElement('p');
    var genero = document.createElement('p');
    var estado = document.createElement('p');
    var pagina = document.createElement('p');
    var esp1 = document.createElement('br');
    var esp2 = document.createElement('br');
    var esp3 = document.createElement('br');
    var esp4 = document.createElement('br');

    imagen_per.src = datos.imagen;
    especie.textContent ='Especie: '+datos.especie;
    nombre.textContent = 'Nombre: '+datos.nombre;
    genero.textContent = 'Genero: '+datos.genero;
    estado.textContent = 'Estado de salud: '+datos.estatus;
    pagina.textContent = datos.pagina;

    contenedor.appendChild(esp4);
    contenedor.appendChild(esp3);   
    contenedor.appendChild(imagen_per);
    contenedor.appendChild(esp1);
    contenedor.appendChild(nombre);
    contenedor.appendChild(especie);
    contenedor.appendChild(genero);
    contenedor.appendChild(estado);
    contenedor.appendChild(pagina);

    var reloj = document.getElementById('Reloj');
    reloj.style.marginTop = "2%";

}