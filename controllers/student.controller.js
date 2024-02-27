const bcryptjs =  require('bcryptjs');
const Student = require('../models/student');

const studentPost = async(req, res) =>{
    const { nameStudent,emailStudent, password} = req.body;

    const student = new Student({ nameStudent,emailStudent, password});

    const salto = bcryptjs.genSaltSync();
    student.password = bcryptjs.hashSync(password, salto);

    await student.save();
    res.status(200).json({
        student
    });
}

module.exports = {
    studentPost
}