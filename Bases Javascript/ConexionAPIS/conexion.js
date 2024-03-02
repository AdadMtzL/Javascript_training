'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

/**
 * Configuración
 */
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const config = require('./config');
const { ifError } = require('assert');

app.use(express.static('public'));
app.get('/',(req, res)=>
{
    res.sendFile('main.html', {root: 'public'});
});

app.listen(config.port, () => 
{
    console.log(`Server en el puerto ${config.port}`);
});

/**
 * Conexiones o peticiones
 */

/*Conexion Api 2 */
//https://openlibrary.org/search.json?q=nombre+del+libro

/**
 * Petición a la Api2
 */
app.post('/api2',async (req,res)=>
{
    try
    {
        var libro = req.body.Libro;
        var libro2 = encodeURIComponent(libro);
        //console.log(`https://openlibrary.org/search.json?q=${libro2}&fields=author_name,first_publish_year,language,number_of_pages_median,publisher,title,subject,availability&limit=15`);
        var respuesta = await axios.get(`https://openlibrary.org/search.json?q=${libro2}&fields=author_name,first_publish_year,language,number_of_pages_median,publisher,title,subject,availability&limit=20`);
        //console.log(respuesta.data.docs);
        res.status(200).json({resultados: respuesta.data.docs});
    }
    catch (e)
    {
        res.status(404).json({estado: "failed"});
        console.log(e);
    }
});

/*Conexion Api 3 */
//www.thesportsdb.com/api/v1/json/3/all_countries.php

/**
 * Peticion a la Api3
 */
app.post('/api3',async (req,res)=>
{
    try
    {
        var respuesta = await axios.get(`https://www.thesportsdb.com/api/v1/json/3/all_countries.php`);
       // console.log(respuesta.data.countries);
        res.status(200).json({resultados: respuesta.data.countries});
    }
    catch (e)
    {
        res.status(404).json({estado: "failed"});
        console.log(e);
    }
});

/*Conexion Api 4 */
//https://rickandmortyapi.com/api/character/number 1-826 

/**
 * Peticion a la Api4
 */
app.post('/api4',async (req,res)=>
{
    try
    {
        var numero = req.body.Numero;
        //console.log(`https://rickandmortyapi.com/api/character/${numero}`);
        var respuesta = await axios.get(`https://rickandmortyapi.com/api/character/${numero}`);
       var respuestaEstructurada = {
            nombre : respuesta.data.name,
            estatus : respuesta.data.status,
            especie : respuesta.data.species,
            genero : respuesta.data.gender,
            imagen : respuesta.data.image,
            pagina : respuesta.data.url,
        };
        //console.log(respuesta);
        //console.log(respuestaEstructurada);
        res.status(200).json({resultados: respuestaEstructurada});
    }
    catch (e)
    {
        res.status(404).json({estado: "failed"});
        console.log(e);
    }
});

