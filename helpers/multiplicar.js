const fs = require('fs');

// const crearArchivo = base => {
//   return new Promise((resolve, reject) => {
//     console.log('====================');
//     console.log(`    Tabla del ${base}`);
//     console.log('====================');

//     let salida = '';

//     for (let i = 1; i <= 10; i++) {
//       // console.log(`${base} x ${i} = ${base * i}`);
//       salida += `${base} x ${i} = ${base * i}\n`;
//     }

//     console.log(salida);

//     fs.writeFileSync(`tabla-${base}.txt`, salida);

//     resolve(`tabla-${base}.txt`);
//   });
// };

const crearArchivo = async (base = 1, listar = false, hasta = 10) => {
  try {
    let salida = '';
    let consola = '';

    if (listar) {
      for (let i = 1; i <= hasta; i++) {
        // console.log(`${base} x ${i} = ${base * i}`);
        salida += `${base} x ${i} = ${base * i}\n`;
        consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
      }
      console.log('===================='.red);
      console.log(`    Tabla del ${base}`.green);
      console.log('===================='.red);

      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
