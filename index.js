// import express from 'express';
// import dotenv from 'dotenv';
// import userRoutes from './routes/user.js';
// const app = express();
// dotenv.config();

// // const express = require('express');
// // const app = express();
// // require('dotenv').config();

// app.get('/', (req, res) => {
//     res.send('Hola Mundo');
// });
// app.use(express.json());
// app.use('/api/users', userRoutes);

// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en el puerto ${PORT}`);
// });
import express from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/user.js";
import swaggerSpec from "./config/swagger.js";


dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.use("/api/docs", 
  swaggerUi.serve,  
  swaggerUi.setup(swaggerSpec)
);

app.use("/api/users", userRoutes);
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});