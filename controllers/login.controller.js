const { request, response } = require('express');
const Teacher = require('../models/teacher');
const Student = require('../models/student')
const byCts = require('bcryptjs');
const { generarJWTN } = require('../helpers/generar_jwtn');

const login = async (req = request, res = response) => {

    const { correo, password } = req.body;
    let emailStudent = correo;
    try {
        const teacher = await Teacher.findOne({ correo });
        const student = await Student.findOne({ emailStudent });
        if (!teacher && !student) {
            return res.status(400).json({
                msg: "Correo incorrecto, no existe en la base de datos"
            });
        }

/*         if (!teacher.estado && !student.estado) {
            return res.status(400).json({
                msg: "usuario no existe en la base de datos"
            });
        } */

        let validarClave = false;
        if (teacher) {
            validarClave = byCts.compareSync(password, teacher.password);
        } else if (student) {
            validarClave = byCts.compareSync(password, student.password);
        }

        if (!validarClave) {
            return res.status(400).json({
                msg: "La contraseña es incorrecta"
            });
        }

        const token = await generarJWTN(student ? student.id : teacher.id);

        res.status(200).json({
            msg: "Bienvenido",
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