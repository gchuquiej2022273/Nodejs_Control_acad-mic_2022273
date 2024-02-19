const { Schema, model } = require('mongoose');

const cursosSchema = Schema({
    
    nombre: {
        type: String,
        required: [true, "El nombre del curso es obligatorio"]
    },

    profesor:{
        type: String,
        required: [true, "El nombre del maestro es obligatorio"]    
    },

    estudiantes: {
        type: [String],
    },

    estado: {
        type: Boolean,
        default: true
    },
});

module.exports = model('cursos', cursosSchema)