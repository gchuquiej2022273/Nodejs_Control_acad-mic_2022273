const Teacher = require('../models/teacher');

const existenteEmail = async (correo = '') => {
    const existeEmail = await Teacher.findOne({correo});
    if(existeEmail){
        throw new Error(`El correo ${ correo } ya está registrado`);
    }
}

module.exports = {
    existenteEmail,
}