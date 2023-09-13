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
            // console.log(result)
        })
    } catch (error) {
        res.status(400).json({error:error.message})
    //    console.log(error.message)
    }
}


// const User = async (req, res) => {
//     const users = req.body.map((user) => ({
//       username: user.username,
//       email: user.email,
//       password: user.password,
//     }));
  
//     try {
//       const result = await UserModel.bulkCreate(users);
//       res.status(200).json(result);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   };
module.exports={User}