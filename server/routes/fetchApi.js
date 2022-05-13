import express from "express";
import { getApi } from '../controllers/fetchApi.js';

const router = express.Router()

router.get('/ping', getApi)

export default router;