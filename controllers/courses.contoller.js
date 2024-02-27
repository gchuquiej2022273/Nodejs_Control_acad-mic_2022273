const Cursos = require('../models/cursos');
const Teacher = require('../models/teacher')

const cursosPost = async (req, res) => {

    const { nombreCurso, profesor } = req.body;
    let nombre = profesor;
    try {
        const cursos = new Cursos({ nombreCurso, profesor });
        const teacher = await Teacher.findOne({ nombre });

        if (!teacher) {
            return res.status(400).json({
                msg: "Accedo denegato, el profesor no existe"
            });
        }

        if (teacher.myCursos.includes(nombreCurso)) {
            return res.status(400).json({
                msg: "EL curso ya esta agregado"
            });
        }

        teacher.myCursos.push(nombreCurso);
        await cursos.save();
        await teacher.save();
        res.status(202).json({
            cursos,
            teacher
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            msg: "El curso no puego agregarce correctamente"
        });
    }

}

const cursoDelete = async (req, res) => {
    const { _id } = req.body;
    const cursos = await Cursos.findByIdAndUpdate(_id, { estado: false });

    res.status(200).json({
        cursos,
        msg: 'Curso Eliminado',
    });
}

module.exports = {
    cursosPost,
    cursoDelete
}