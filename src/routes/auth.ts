import { Router } from "express";
import { registerAuthCtrl, loginAuthCtrl } from "../controllers/auth.controller"; 

const router = Router();

router.post("/register", registerAuthCtrl);
router.post("/login", loginAuthCtrl);

export { router };