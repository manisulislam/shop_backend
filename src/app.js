import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app=express()



const allowedOrigins = [
    'http://localhost:5173',  
    '*', 
    "chrome-extension://aejoelaoggembcahagimdiliamlcdmfm/index.html#requests"
];
const corsOrigin ={
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true); // Allow if origin is in allowedOrigins
        } else {
            callback(new Error('Not allowed by CORS')); // Reject if origin is not allowed
        }
    }, 
    credentials:true,            
    optionSuccessStatus:200
}
app.use(cors(corsOrigin));

app.use(express.json())
app.use(express.urlencoded({
    extended: true,
   
}))
app.use(cookieParser())

export {app}