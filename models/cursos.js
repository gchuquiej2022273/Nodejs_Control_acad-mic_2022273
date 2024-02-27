const { Schema, model } = require('mongoose');

const cursosSchema = Schema({
    
    nombreCurso: {
        type: String,
        required: [true, "El nombre del curso es obligatorio"]
    },

    profesor:{
        type: String,
        required: [true, "El nombre del maestro es obligatorio"]    
    },

    correo: {
        type: [String],
    },

    estado: {
        type: Boolean,
        default: true
    },
});

module.exports = model('cursos', cursosSchema)