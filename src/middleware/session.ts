import { NextFunction, Request, Response } from "express"
import { verifyToken } from "../utils/jwt.handle";
import { RequestExt } from "../interfaces/requestExt.iterface";

const checkJwt = (req: RequestExt, res: Response, next:NextFunction) => {
    try{
        const jwtByUser = req.headers.authorization || "";
        const jwt = jwtByUser.split(" ").pop();
        const isOk = verifyToken(`${jwt}`);
        console.log(isOk);
        if(!isOk) {
            res.status(401);
            res.send("No tienes un Token valido");
        } else {
            req.user = isOk;
            console.log({ jwtByUser })        
            next();
        }
    } catch(e){
        console.log ({ e })
        res.status(400);
        res.send("Sesión no valido")
    }
}

export { checkJwt }