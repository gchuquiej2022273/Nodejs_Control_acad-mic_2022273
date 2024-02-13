const bcryptjs = require('bcryptjs');
const Alumno = require('../models/Alumno');
const { response } = require('express');

const alumnoPost = async(req, res) =>{
    const { nombre, correo, password, role } = req.body;
    const alumno = new Alumno({nombre, correo,password, role});

    const encrip = bcryptjs.genSaltSync();
    alumno.password = bcryptjs.hashSync(password,encrip);

    await alumno.save();
    res.status(202).json({
        alumno
    });
}

module.exports = {
    alumnoPost
}