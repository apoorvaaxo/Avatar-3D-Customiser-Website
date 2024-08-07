import express from 'express';
import * as dotenv from 'dotenv';
// const express = require('express');
import cors from 'cors';
// const cors = require('cors');
// const dotenv = require('dotenv');
import dalleRoutes from './routes/dalle.routes.js';
// const dalleRoutes = require('./routes/dalle.routes.js'); // Ensure this path is correct
dotenv.config(); // Load environment variables


const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/dalle", dalleRoutes); // Change the route path here

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello from dalle" });
});

app.listen(PORT, () => console.log(`Server has started on port ${PORT}`));
