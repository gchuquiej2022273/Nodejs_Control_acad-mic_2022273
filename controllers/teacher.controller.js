const bcryptjs = require('bcryptjs');
const Teacher = require('../models/teacher');


const usuarioPost = async (req, res) => {

    const { nombre, correo, password, role } = req.body;

    const teacher = new Teacher({ nombre, correo, password, role });

    const encrip = bcryptjs.genSaltSync();
    teacher.password = bcryptjs.hashSync(password, encrip);

    await teacher.save();
    res.status(202).json({
        teacher
    });
}

const deletePerfil = async (req, res) => {
    const {_id} = req.doby;cls
    const usuario = await Usuario.findByIdAndUpdate(_id, {estado: false});
    const autentificado = req.usuario;

    res.status(200).json({
        msg: "Usuario Eliminado",
        usuario,
        autentificado
    });
}

module.exports = {
    usuarioPost,
    deletePerfil
}