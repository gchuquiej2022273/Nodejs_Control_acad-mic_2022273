const Cursos = require('../models/cursos');
const Student = require('../models/student');

const joinPost = async (req, res) => {
    const { nombreCurso, correo } = req.body;
    try {

        const cursos = await Cursos.findOne({ nombreCurso });

        if (!cursos) {
            return res.status(400).json({
                msg: "El curso no se encuentra"
            });
        }

        if (cursos.correo.includes(correo)) {
            return res.status(400).json({
                msg: "El estudiante ya se encuentra en esta asignatura"
            });
        }

        cursos.correo.push(correo);

        await cursos.save();;
        res.status(200).json({
            msg: "Te uniste a una clase",
            cursos,
        });

    } catch (e) {
        res.status(500).json({
            msg: `Error al unirse a un grupo ${nombreCurso}`
        });
    }
}

module.exports = {
    joinPost
}