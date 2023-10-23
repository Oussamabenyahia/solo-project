const express = require('express')
const router = express.Router()
const {getAll,create,deletejob,getByTitle} = require("../controllers/jobs")
router.get("/getbytitle",getByTitle)
router.get("/getAll",getAll);
router.post("/addJob",create);
router.delete("/delete",deletejob)
module.exports = router