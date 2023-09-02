const UserModel = require("../Models/UserModel.js")


const User= async(req, res)=>{
    const {username,email,password}=req.body

    try {
        const user= await UserModel.create({
            username,
            email,
            password
        }).then(result =>{
            res.status(200).json(result)
            console.log(result)
        })
    } catch (error) {
        res.json(400).json({error:error.message})
    }
}

module.exports={User}