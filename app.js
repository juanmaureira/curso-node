const { crearArchivo, listar } = require('./multiplicar/multiplicar');
var colors = require('colors');
const argv = require('./config/yargs').argv;

let comando = argv._[0];

switch(comando){
    case 'listar':  
        listar(argv.base, argv.limite);
    break;
    case 'crear':
        crearArchivo(argv.base , argv.limite)
                .then(archivo => console.log(`Archivo creado: ${archivo.red}`))
                .catch(error => console.log(error));
    break;
    case 'borrar':
    break;
    default:

    break;
}