const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

// 5x1 = 5
// 5x2 = 10
// ... and
// 5x10 = 50

console.clear();

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs', argv.base);

crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo =>
    console.log('Archivo'.green, nombreArchivo.rainbow, 'creado'.green)
  )
  .catch(err => console.log(err));

// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// console.log(process.argv);
// console.log(base);

// crearArchivo(base)
//   .then(nombreArchivo => console.log('Archivo', nombreArchivo, 'creado'))
//   .catch(err => console.log(err));

// const base = 2;

// crearArchivo(base)
//   .then(nombreArchivo =>
//     console.log('Archivo', nombreArchivo, 'creado correctamente')
//   )
//   .catch(err => console.log(err));
