require('dotenv').config();

const {leerInput, inquirerMenu, pausa, listadoLugares} = require("./hekpers/inquirer");
const Busquedas = require("./models/busquedas");
const main = async () => {
    let opt;
    const busquedas = new Busquedas();
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case 1:
                // Mostrar mensaje
                const lugar = await leerInput('Ciudad: ');

                //Buscar los lugares
                const lugares = await busquedas.ciudad(lugar);

                //Seleccione el lugar
                const id = await listadoLugares(lugares);
                const lugarSel = lugares.find(l => l.id === id);

                //Clima

                //Mostrar resultados
                console.log('\nInformación de la ciudad\n'.green);
                console.log('Ciudad: ', lugarSel.nombre);
                console.log('Lat: ', lugarSel.lat);
                console.log('Long: ', lugarSel.lng);
                console.log('Temperatura: ',);
                console.log('Minima: ',);
                console.log('Maxima: ',);
                break;

        }
        if (opt !== 0) await pausa();
    } while (opt !== 0)

}

main();