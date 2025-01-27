import esperarSegundos from './async.js';

(async () => {
    console.log("Prueba 1: Esperando 3 segundos...");
    await esperarSegundos(3);

    console.log("Prueba 2: Esperando 5 segundos...");
    await esperarSegundos(5);

    console.log("Prueba 3: Esperando 2 segundos...");
    await esperarSegundos(2);

    console.log("Todas las pruebas completadas.");
})();