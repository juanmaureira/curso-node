const fs = require('fs');
var colors = require('colors');

let listar = (base, limite) => { 
    console.log('============================'.green);
    console.log(`      Tabla de ${ base }    `.green);
    console.log('============================'.green);
    for(let i=1; i<=limite; i++){
        console.log(`${base} x ${i} = ${base*i}\n`);
    }
}

let crearArchivo = (base, limite) =>{
    return new Promise((resolve,reject) => {

        if(!Number(base)){
            reject('No ingresaste un numero');
            return;
        }

        let data='';

        for( let i=1;i<=limite;i++){
            data += `${base} x ${i} = ${base*i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${base}-desde-el-1-al-${limite}.txt`, data , (err) => {
            if (err) 
                reject(err);
            else
                resolve (`tablas/tabla-${base}-desde-el-1-al-${limite}.txt`);
            
          });
    });
}

module.exports = {
    crearArchivo,
    listar
}