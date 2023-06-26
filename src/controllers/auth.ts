import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../servicios/auth.services"
import { handleHttp } from "../utils/error.handle";

const registerAuthCtrl = async (req: Request, res: Response) => {
    try{
        console.log(req.body);
        
        const responseUser = await registerNewUser(req.body);
        res.send(responseUser);
    }catch(e){
        handleHttp(res, "Error register user", e);
    }
}

const loginAuthCtrl = async (req: Request, res: Response) => {

}

export { registerAuthCtrl, loginAuthCtrl }