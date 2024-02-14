const jwtn = require('jsonwebtoken');

const generarJWTN = (uid = '') =>{
    return new Promise((resolve, reject) =>{
        const payload = { uid, };
        jwtn.sign(
            payload,
            process.env.SECRETORPRIVATEKEY,
            {
                expiresIn: '1h',
            },
            (err, token)=>{
                err ? (console.log(err),reject('No se puede generar el token')): resolve(token);
            }
        );
    }); 
};


module.exports = {
    generarJWTN
}