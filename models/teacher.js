const { Schema, model } = require('mongoose');

const teacherSchema = Schema({

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

    myCursos: {
        type: [String]
    },
    
    role: {
        type: String,
        default : "TEACHER_ROLE"
    }
});

/*     usuarioSchema.methods.toJSON = function(){
        const {__V, password, _id, ...Usuarios} = this.toObject();
        Usuarios.uid = _id;
        return Usuarios;
    } */

module.exports = model('Teacher', teacherSchema)