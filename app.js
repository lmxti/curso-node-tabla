const { crearArchivo, crearArchivo2 } = require('./helpers/multiplicar'); // require es una funcion para importar desde otro modulo al ambito actual.
const argv = require('./config/yargs');
require('colors')


console.clear();

// console.log(argv);

crearArchivo( argv.b, argv.l ,argv.h)
    .then( nombreArchivo => console.log('\t',nombreArchivo.rainbow, 'creado'))
    .catch(error => console.log(error));


