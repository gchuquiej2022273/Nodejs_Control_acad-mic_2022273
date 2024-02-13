const mongoose = require('mongoose');

const dbConnection = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_CNN,{});
        console.log('Base de datos Conectada');
    } catch (e) {
        throw new Error('Error en la base de datos',e);
    }
}

module.exports = {
    dbConnection
}