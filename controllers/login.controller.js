const { request, response } = require('express');
const Usuario = require('../models/Usuarios');
const byCts = require('bcryptjs');
const { generarJWTN } = require('../helpers/generar_jwtn');

const login = async (req = request, res = response) => {
    const { correo, password } = req.body;
    try {
        const usuario = await Usuario.findOne({ correo });

        if (!usuario) {
            return res.status(400).json({
                msg: "Correo incorrecto no existe en la base de datos"
            });
        }

        if (!Usuario.estado) {
            return res.status(400).json({
                msg: "El usuario no existe en la base de datos"
            });
        }

        const validarClave = byCts.compareSync(password, usuario.password);
        if (!validarClave) {
            return res.status(400).json({
                msg: "La contraseña es incorrecta"
            });
        }

        const token = await generarJWTN(usuairo.id);

        res.status(200).json({
            msg: "Bienvenido",
            usuario,
            token
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            msg: 'comuniquese con un administrador'
        });
    };
};

module.exports = {
    login
}