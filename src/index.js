import dotenv from "dotenv"
import connectDB from "./db/index.js"


dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    const port = process.env.PORT || 8000
    const server=app.listen(port, ()=>{
        console.log(`server is running on port :${port}`)
    })
    server.on("error",(err)=>{
        console.log("Server error", err)
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!!!", err)
})