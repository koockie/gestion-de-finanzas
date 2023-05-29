const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:SiHrBrnpp7YepAv9@gdg01tel335.tc2whtw.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error de conexión a la base de datos:'));
db.once('open', () => {
    console.log('Conexión exitosa a la base de datos');
});
module.exports = db;

//mongodb+srv://root:SiHrBrnpp7YepAv9@gdg01tel335.tc2whtw.mongodb.net/