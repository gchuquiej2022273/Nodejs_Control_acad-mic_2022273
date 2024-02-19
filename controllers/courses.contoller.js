const Cursos = require('../models/cursos');


const cursosPost = async(req,res )=>{

    const {nombre, profesor} = req.body;
    try {
        const cursos = new Cursos({nombre,profesor});

        await cursos.save();
        res.status(202).json({
            cursos
        })
    } catch (e) {
        console.log(e);
        res.status(500).json({
            msg: "El curso no puego agregarce correctamente"
        });
    }

}

const cursoDelete = async(req, res) =>{
    const { _id } = req.body;
    const cursos = await Cursos.findByIdAndUpdate(_id,{estado: false});

    res.status(200).json({
        cursos,
        msg: 'Curso Eliminado',
    });
}

module.exports = {
    cursosPost,
    cursoDelete
}