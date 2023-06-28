import { Router } from "express";
import { getFile } from "../controllers/storage.controller";
import { checkJwt } from "../middleware/session";

const router = Router();

router.post("/",checkJwt, getFile)

export { router };