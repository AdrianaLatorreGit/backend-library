const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersController')
const multer = require('multer')
const path = require('path')
const { v4: uuidv4 } = require('uuid')

const multerDiskStorage = multer.diskStorage({
  destination: (req, file, callback) => {
    const destinationFolder = path.join(__dirname, "../public/images/profile")
    callback(null, destinationFolder)
  },
  filename: (req, file, callback) => {
    const fileName = `${uuidv4()}-${file.originalname}`
    callback(null, fileName)
  }
})

const upload = multer({storage: multerDiskStorage})

router.get('/cadastro', usersControllers.registerUserView);
router.post('/cadastro', upload.single('profileImage') , usersControllers.registerUser);

module.exports = router;
