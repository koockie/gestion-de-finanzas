const express = require('express');
const { registroUser } = require('./loginFuncions');
const app = express();

// Rutas de ejemplo
app.get('/', (req, res) => {
    res.send('Primer inicio de gestion de gastos personales !');
});


/////////////
app.post('/registro', (req, res) => {

    registroUser(request.body.search, response)

});

app.post('/login', (req,res) => {

});





/////////////
// Iniciar el servidor
app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});