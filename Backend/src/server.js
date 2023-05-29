const express = require('express');
const app = express();
const initDB=require('C:/Users/marce/OneDrive/Escritorio/proyecto-apps/gestion-de-finanzas/Backend/src/bd.js');

const mongoose = require('mongoose');
const db = require('C:/Users/marce/OneDrive/Escritorio/proyecto-apps/gestion-de-finanzas/Backend/src/bd.js');
// Rutas de ejemplo
app.get('/', (req, res) => {
    res.send('Primer inicio de gestion de gastos personales !');
});

/////////////
app.use(require('./routes/menu'));


/////////////

// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});