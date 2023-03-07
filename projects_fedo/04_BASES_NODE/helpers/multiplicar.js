const fs = require("fs");
const colors = require('colors');

/*
// normal
const crearArchivo = (base = 5) => {

    console.log('================')
    console.log('  Tabla del:', base)
    console.log('================')

    let salida = '';

    for (let i = 1; i <= 10; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;    
    }

    console.log(salida);

    
    //fs.writeFile(`tabla_${base}.txt`, salida, (err) => {
    //    if(err) throw err;
    //   console.log(`archivo tabla_${base}.txt, creado :)`)
    //})
    

    fs.writeFileSync(`tabla_${base}.txt`, salida);

    console.log(`tabla_${base}.txt, creado :)`)
}
*/

// forma async
const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
  try {
    
    let salida = "" 
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.green} ${i} ${'='.cyan} ${base * i}\n`;
    }

    if (listar) {
        console.log("================".green);
        console.log('  Tabla del:'.green, colors.blue( base ));
        console.log("================".green);
        
        console.log(consola);
    }


    fs.writeFileSync(`./salida/tabla_${base}.txt`, salida);

    return `tabla_${base}.txt, creado`;

  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
