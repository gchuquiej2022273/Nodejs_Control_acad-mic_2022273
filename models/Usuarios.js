const { Schema, model } = require('mongoose');

const alumnoSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'EL nombre del usuario es obligatorio']
    },

    correo: {
        type: String,
        required: [true,'El correo el obligatorio']
    },

    password: {
        type: String,
        required: [true, 'El password en obligatorio']
    },

    estado:{
        type: Boolean,
        default: true
    },

    role: {
        type: String,
        required: true,
        enum:['TEACHER_ROLE','STUDENT_ROLE']
    }
});

    alumnoSchema.methods.toJSON = function(){
        const {__V, password, _id, ...Alumno} = this.toObject();
        Alumno.uid = _id;
        return Alumno;
    }

module.exports = model('Alumno', alumnoSchema)