const { Schema, model} = require('mongoose');

const studentSchema = Schema({

    nameStudent: {
        type: String,
        required: [true, "El nombre del  estudiante es obligatorio"]
    },

    emailStudent: {
        type: String,
        required: [true, "El email es obligatorio"]
    },

    password: {
        type: String,
        required: [true, "the password is mandatory"]
    },

    role: {
        type: String,
        default: "STUDENT_ROLE"
    },

    estado: {
        type: Boolean,
        default: true
    },
    
    MyCursos: {
        type: [String],
    },

});

module.exports = model("Student", studentSchema);