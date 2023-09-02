const {ImagesUploads,
    upload,
    GetAllMachines
} = require("../Controllers/Machine")
const express = require("express")

const router = express.Router()

router.post('/machine',upload.single('image'), ImagesUploads)

router.get("/machine", GetAllMachines)


module.exports = router