const MachineModel = require("../Models/Machine")
const multer = require('multer');
const fs = require('fs');
const path = require('path');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

const ImagesUploads=async(req, res) => {

  const image = req.file;

  const {Name,Description,Model}= req.body

  try {
    // models=[]

    // model={
    //   model:modelName,
    //   capacity:Modelcapacity
    // }
    if (!image) {
        const error = new Error('Please upload a file');
        error.status = 400;
        throw error;
      }
      console.log(image)
      const machine = await MachineModel.create({
        Name,
        Description,
        ImagePath:image.filename,
        Model
      }).then(result =>{
        
        res.status(200).json(result)
      })
      // res.send(file)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
  ;
}

const GetAllMachines = async (req,res)=>{
  try {
    const machines = await MachineModel.findAll()
    
    .then(result =>{
      
      res.status(200).json(result)
    })
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}
module.exports={
  ImagesUploads,
  upload,
  GetAllMachines
}
