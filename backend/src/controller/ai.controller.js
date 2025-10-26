
const aiservice=require("../services/ai.services")


module.exports.getreview=async(req,res)=>{

try {


    const code= req.body.code;
    if(!code ){
        return res.status(400).json({error:"prompt required!"})
    }
    const response=await aiservice(code);
    res.send(response)
    
    
}  catch (error) {
    console.error("Error in getresponse:", error);
    return res.status(500).json({ error: "Internal server error", details: error.message });
}

    


}




