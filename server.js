//LIBRETIAS DE EXPRESS
const express = require('express')
const app = express()//Declaro una variable para porde utilizar express

const hbs = require('hbs') //importo el hbs
require('./modules/helpers')//Importo mi archivo de helpers

const port = process.env.PORT || 3000;//De esta forma obtenego el puerto que se está corriendo si este no existe le pongo por defecto 3000

//Esto se llama Middleware, es un calback que se ejecutan siempre, no importa la URL que se escriba
app.use(express.static(__dirname + '/public'));//Pongo que se concentre en la carpeta public

hbs.registerPartials( __dirname + '/views/partials' );//Con esto indico a handlebars que la carpeta partials va a tener todos mis archivos de los parciales
app.set('view engine', 'hbs');//Pongo en uso Express HBS engine


//Defino lo que quiero hacer en raiz
app.get('/', (req, res) =>{
    
    res.render('home',{
        nombre: 'miguel'
    })//Con render me permite redireccionar a páginas, lo que hace esto en la carpeta views va 
    //a buscar un archivo home, cabe mencionar que la carpeta donde se encuentren las páginas siempre se debe de 
    //llamar views

    //Lo que se encuentra dentro de las llaves son parametros que en la vista (HOME) se están utilizando de esta forma:
    // {{ nombre }}

})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`)//Mando un mensaje cuando se ejecuta app.liste
})//Trabajo con el puerto 3000