const express=require ("express");

const aicontroller=require("../controller/ai.controller")
const router=express.Router();
//controller

router.post("/get-review",aicontroller.getreview)



module.exports=router;