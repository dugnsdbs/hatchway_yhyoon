import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import doteven from "dotenv";

import apiRoutes from './routes/fetchApi.js'
import userRoutes from './routes/users.js';

const app = express();
doteven.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.use('/api', apiRoutes);
app.use('/user', userRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, console.log(`server is running on ${PORT}`)))
.catch((error) => console.log(error.message))