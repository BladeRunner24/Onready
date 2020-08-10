const express = require('express');
const index = express();

const concesionaria = [
    {marca: 'Peugeot',
     modelo: '206',
     puertas: 4,
     precio: 200000},
    {marca: 'Honda',
     modelo: 'Titan',
     cilindrada: '125c',
     precio: 60000},
    {marca: 'Peugeot',
     modelo: '208',
     puertas: 5,
     precio: 250000},
    {marca: 'Yamaha',
     modelo: 'YBR',
     cilindrada: '160c',
     precio: 85500.50}
];

const paso1 = `marca: ${concesionaria[0].marca} // Modelo: ${concesionaria[0].modelo} // Puertas: ${concesionaria[0].puertas} // Precio: $${concesionaria[0].precio}`;
const paso2 = `marca: ${concesionaria[1].marca} // Modelo: ${concesionaria[1].modelo} // Cilindrada: ${concesionaria[1].cilindrada} // Precio: $${concesionaria[1].precio}`;
const paso3 = `marca: ${concesionaria[2].marca} // Modelo: ${concesionaria[2].modelo} // Puertas: ${concesionaria[2].puertas} // Precio: $${concesionaria[2].precio}`;
const paso4 = `marca: ${concesionaria[3].marca} // Modelo: ${concesionaria[3].modelo} // Cilindrada: ${concesionaria[3].cilindrada} // Precio: $${concesionaria[3].precio}`;

const paso5 =  `Vehículo más caro: ${concesionaria[2].marca} ${concesionaria[2].modelo}`;
const paso6 =  `Vehículo más barato: ${concesionaria[1].marca} ${concesionaria[1].modelo}`;
const paso7 =  `Vehículo que contiene en el modelo la letra ‘Y’: ${concesionaria[3].marca} ${concesionaria[3].modelo} $${concesionaria[3].precio}`

const paso8 = `Vehículos ordenados por precio de mayor a menor:`;
const paso9 = `${concesionaria[2].marca} ${concesionaria[2].modelo}`;
const paso10 = `${concesionaria[0].marca} ${concesionaria[0].modelo}`;
const paso11 = `${concesionaria[3].marca} ${concesionaria[3].modelo}`;
const paso12 = `${concesionaria[1].marca} ${concesionaria[1].modelo}`;
const igual = '============================='

console.log(paso1 + '\n' + paso2 + '\n' + paso3 + '\n' + paso4 + '\n' + igual + '\n' + paso5 + '\n' + paso6 + '\n' + paso7 + '\n' + igual + '\n' + paso8 + '\n' + paso9 + '\n' + paso10 + '\n' + paso11 + '\n' + paso12);

/*Hice una salida para usar el servidor en caso que lo quieran probar*/ 

index.get('/onready',(req, res) => {
    
    res.send(paso1 + '\n' + paso2 + '\n' + paso3 + '\n' + paso4 + '\n' + igual + '\n' + paso5 + '\n' + paso6 + '\n' + paso7 + '\n' + igual + '\n' + paso8 + '\n' + paso9 + '\n' + paso10 + '\n' + paso11 + '\n' + paso12);

});

index.use((err,req,res,next) => {
    if(!err) return next();
    console.log('Error, algo salio mal', err);
    res.status(500).send('Error');
});

index.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});