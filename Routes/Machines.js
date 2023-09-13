const {
    ImagesUploads,
    upload,
    GetAllMachines,
    CreateModels,
    GetSingleMachine,
    UpdateMachine,
    UpdateMachineModel,
    DeleteRecord,
    DeleteModel
} = require("../Controllers/Machine")
const express = require("express")

const router = express.Router()

router.post('/machine',upload.single('image'), ImagesUploads)

router.get("/machine", GetAllMachines)

router.get("/machine/:id", GetSingleMachine)

router.post("/model/:id", CreateModels)

router.put("/machine/:Id",UpdateMachine)

router.put("/model/:id",UpdateMachineModel)

router.delete("/machine/:id",DeleteRecord)

router.delete("/model/:id",DeleteModel)



module.exports = router