const fs = require('fs');

const leerArchivo = () => {
    try {
        const data = fs.readFileSync('citas.json', 'utf8');
        return JSON.parse(data);
    } catch (err) {
        return [];
    }
};

const registrarMascota = (mascota) => {
    let mascotas = leerArchivo();
    mascotas.push(mascota);
    fs.writeFileSync('citas.json', JSON.stringify(mascotas, null, 2));
    console.log('Mascota registrada:', mascota);
};

const listarMascotas = () => {
    const mascotas = leerArchivo();
    mascotas.forEach((mascota, index) => {
        console.log(`${index + 1}. Nombre: ${mascota.nombre}, Edad: ${mascota.edad}, Tipo: ${mascota.tipo}, Color: ${mascota.color}, Enfermedad: ${mascota.enfermedad}`);
    });
};

module.exports = { registrarMascota, listarMascotas };