import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from './routes/userRoutes.js';
import courseRoutes from './routes/coursesRoutes.js';

dotenv.config(); // Make sure this is at the beginning

const app = express();
app.use(cors());
app.use(express.json());
app.use('/user',userRoutes);
app.use('/course',courseRoutes);
app.get("/", (req, res) => {
    res.json('Hello From NodeJS server');
});

const PORT = process.env.PORT || 5000;
const url = process.env.MONGO;
//mongodb+srv://kumarayushjha123:<password>@cluster0.wolkvu0.mongodb.net/myDatabase?retryWrites=true&w=majority&appName=Cluster0

mongoose
    .connect(url)
    .then(() => 
        app.listen(PORT,()=>console.log(`App is running at port ${PORT}`)))
    .catch(err => console.log(err.message));
