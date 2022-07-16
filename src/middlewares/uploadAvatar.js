const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/avatars'));
    },
    filename: (req, file, cb) => {
        const avatar = 'avatar'  + Date.now() + path.extname(file.originalname);
        cb(null, avatar);
    },

});



const upload = multer({
    storage: storage,
    limits: { fieldSize: 2097152 },
    fileFilter: (req, file, cb) => {
        console.log(file)
        const filetypes = /jpg|JPG|gif|GIF|png|PNG|jpeg|JPEG/
        const mimetype = filetypes.test(file.mimetype);
        const extname = filetypes.test(path.extname(file.originalname));
        console.log(mimetype)
        console.log(extname)
        if(mimetype && extname){
            return cb(null, true);
        }
        //console.log(file)
        cb('Error: el archivo debe ser una imagen, vuelva para atras');
    }

});

module.exports = upload;