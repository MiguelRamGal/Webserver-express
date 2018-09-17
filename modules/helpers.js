const hbs = require('hbs') //importo el hbs

//Defino mi helper para poderlo utilizar
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear()
})

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    
    palabras.forEach((palabra, index) => {
        palabras[index] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
})
