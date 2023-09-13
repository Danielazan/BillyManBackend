const {Machine,MachineModel} = require("../Models/Machine")
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

  const {Name,Description,ModelName,
    Capacity,Model}= req.body

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
      const machine = await Machine.create({
        Name,
        Description,
        ImagePath:image.filename,
      
      }).then(result =>{
        
        res.status(200).json(result)
        return result
      })

      
      // res.send(file)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
  ;
}

const CreateModels= async (req,res)=>{
  try {
    const id = req.params.id
    const {ModelName,
      Capacity}= req.body

      const machinemodel= MachineModel.create({
        ModelName,
        Capacity,
        MachineId:id
      }).then(result =>{
        res.status(200).json(result)
      })

  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

const GetAllMachines = async (req,res)=>{
  try {
    const machines = await Machine.findAll()
    
    .then(result =>{
      
      res.status(200).json(result)
    })
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}



const GetSingleMachine = async(req,res)=>{
  const Machineid = req.params.id
  let Modles;
  try {

    const GetModels = await MachineModel.findAll({
      where: { MachineId:Machineid }
    }).then(result =>{
      // res.status(200).json(result)
      Modles = result
    })
    const Getone = await Machine.findOne({where: {id:Machineid}}).then(result =>{
      res.status(200).json({result,Modles})
    })
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

const UpdateMachine = async (req, res) => {
  try {
    const image = req.file;
    const {Id} =req.params
  const {Name,Description}= req.body

  // if (!image) {
  //   const error = new Error('Please upload a file');
  //   error.status = 400;
  //   throw error;
  // }

    const machine = await Machine.update(
      { Name, Description },
      { where: { id: Id } }
    ).then(result =>{
      res.status(200).json({message:"Record updated Successfully"})
    })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const UpdateMachineModel = async (req, res) => {
  try {
    const { ModelName, Capacity } = req.body;

    const {id}=req.params
    const machine = await MachineModel.update(
      { ModelName, Capacity},
      { where: {id} }
    );
    res.status(200).json({ message: 'Models updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const DeleteRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Machine.destroy({
      where: { id },
      cascade: true,
    }).then(result =>{
      res.status(200).json({ message: 'Record deleted successfully' });
    })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const DeleteModel = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await MachineModel.destroy({
      where: { id }
    }).then(result =>{
      res.status(200).json({ message: 'Record deleted successfully' });
    })
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports={
  ImagesUploads,
  upload,
  GetAllMachines,
  CreateModels,
  GetSingleMachine,
  UpdateMachine,
  UpdateMachineModel,
  DeleteRecord,
  DeleteModel
}
