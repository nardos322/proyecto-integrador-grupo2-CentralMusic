const { check, body } = require('express-validator');
const db = require('../database/models');

let validateRegister = [
    check('user')
        .notEmpty().withMessage('Debes ingresar un usuario').bail()
        .isLength({ min: 5}).withMessage('ingrese un usuario valido')
        .matches(/^[a-z0-9_-]{4,16}$/).withMessage('Ingrese un usuario valido')
        .custom((value) => {
            return db.User.findOne({
                where: {
                    user: value
                }
            })
            .then(user => {
                if(user){
                    return Promise.reject('Usuario no disponible')
                }
            })

        }),
    check('name')
        .notEmpty().withMessage('Debes ingresar un nombre').bail()
        .isLength({ min: 2}).withMessage('Ingrese un nombre valido')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('Ingrese un nombre valido'),
    check('lastname')
        .notEmpty().withMessage('Debes ingresar tu apellido').bail()
        .isLength({ min: 2}).withMessage('ingrese un apellido valido')
        .matches(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]*$/).withMessage('Ingrese un apellido valido'),
    check('email')
        .notEmpty().withMessage('Debes ingresar un email').bail()
        .isEmail().withMessage('Debes ingresar un email valido')
        .matches(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/).withMessage('Ingrese un email valido'),
    check('email').custom((value) => {
       return db.User.findOne({
           where: {
               email: value
           }
       })
       .then(user => {
           if(user){
               return Promise.reject('Email ya registrado')
           }

       })
    }),
    check('password')
        .notEmpty().withMessage('Debes ingresar una contraseña').bail()
        .isLength({ min: 8 }).withMessage('Contraseña minimo 8 caracteres')
        .matches(/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/)
        .withMessage('Debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos'),
    check('password2')
        .notEmpty().withMessage('Reingrese su contraseña').bail(),
    body('password2').custom((value, { req }) => {
        if(value !== req.body.password){
            return false;
        }
        return true;
    }).withMessage('Las contraseñas no coinciden'),
    check('terms')
        .isString('on').withMessage('Debes aceptar los terminos y condiciones')    
        
]

module.exports = validateRegister;