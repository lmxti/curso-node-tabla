const fs = require('fs'); // fs permite interactuar con los archivos del sistema
const colors = require('colors') 

const crearArchivo = async ( base = 5 , listar = false, hasta = 10) => {
    try {
      
        let salida = '';
        let consola = '';

        /* Calcula y asigna los valores de la tabla del 5 hasta  5x10 */
        for (let i = 1; i <= hasta ; i++) {
            salida += `${base} x ${ i } = ${base * i } \n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i } \n`;
          
        }

        if (listar) {
            console.log('================================'.green);
            console.log('\tTabla del: '.blue, colors.cyan(base));
            console.log('================================'.green);
            console.log(consola);
        }
    
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );

        return `Tabla-${base}.txt creada`
        
    } catch (error) {
        throw error;
    }

    

}

// Exportamos un metodo llamado crearArchivo
module.exports = {
   crearArchivo
}

