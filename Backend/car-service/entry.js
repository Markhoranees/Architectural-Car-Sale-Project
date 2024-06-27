import express from 'express';
const PORT=8000
const app=express();
import cors from 'cors'
import router from './routes/carRoutes.js';
import mongoose from 'mongoose';
async function connect() {
    try {
        await mongoose.connect("mongodb+srv://aneeskhann:aneeskhan@cluster0.r7cpqch.mongodb.net/cars?retryWrites=true&w=majority", { serverApi: { version: '1', strict: true, deprecationErrors: true } });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}
connect();
app.use(cors())
app.use(express.json())


app.use('/api',router);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT http://localhost:${PORT}`);
})


