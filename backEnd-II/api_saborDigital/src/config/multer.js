const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Sai de 'config', sai de 'src' e entra em 'uploads' na raiz
        cb(null, path.join(__dirname, '../../uploads'));
    },
    filename: (req, file, cb) => {
        const extensao = path.extname(file.originalname);
        const nomeUnico = `${Date.now()}-${Math.round(Math.random() * 1E9)}${extensao}`;
        cb(null, nomeUnico);
    }
});

// Configuração básica do Multer exportada como um middleware único chamado 'imagem'
const upload = multer({ storage: storage });
module.exports = upload.single('imagem');