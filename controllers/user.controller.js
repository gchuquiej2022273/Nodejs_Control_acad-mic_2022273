const bcryptjs = require('bcryptjs');
const Usuario = require('../models/Usuarios');


const usuarioPost = async (req, res) => {

    const { nombre, correo, password, role } = req.body;

    const usuario = new Usuario({ nombre, correo, password, role });

    const encrip = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, encrip);

    await usuario.save();
    res.status(202).json({
        alumno
    });
}

const deletePerfil = async (req, res) => {
    const {_id} = req.doby;
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