import router from "./Routes/projectRoute";
import cors from 'cors'
import express, { json } from "express";
import router1 from "./Routes/userRoute";
 


const app = express();
app.use(json());
app.use(cors());

app.use('/projects',router)
app.use("/users",router1)

app.listen(5000,()=>{
    console.log('App is running...');
    
})
