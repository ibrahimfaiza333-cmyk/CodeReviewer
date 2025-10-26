const dotenv=require("dotenv")
const app=require("./src/app");

dotenv.config();

app.listen(process.env.PORT,()=>{
    console.log("server runs at port 8000")
})