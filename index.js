const {leerInput, inquirerMenu, pausa} = require("./hekpers/inquirer");
const main = async () => {
    let opt;

    do {
        opt = await inquirerMenu();
        if (opt !== 0) await pausa();
    } while (opt !== 0)

}

main();