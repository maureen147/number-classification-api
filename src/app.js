// src/app.js
import express from 'express';
import cors from 'cors';
import numberRoutes from './routes/numberRoutes.js';


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', numberRoutes);
app.get("/", (req, res) => {
    console.log("maureen")
    res.send("Hello, World!");
    
})

export default app;
