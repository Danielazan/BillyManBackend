const {
    CreateTeams,
  upload,
  GetAllTeamMembers,
  GetSingleMemeber ,
  UpdateMember,
  
  DeleteRecord,
} = require("../Controllers/Teams")
const express = require("express")

const router = express.Router()

router.post('/teams',upload.single('image'), CreateTeams)

router.get("/teams", GetAllTeamMembers)

router.get("/teams/:id", GetSingleMemeber)



router.put("/teams/:Id",UpdateMember)



router.delete("/teams/:id",DeleteRecord)





module.exports = router