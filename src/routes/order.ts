import { Router } from "express";
import { getItem } from "../controllers/order.controller";
import { checkJwt } from "../middleware/session";

const router = Router();

router.get('/', checkJwt, getItem);

export { router }