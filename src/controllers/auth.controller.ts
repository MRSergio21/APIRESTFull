import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.services"
import { handleHttp } from "../utils/error.handle";

const registerAuthCtrl = async ({ body }: Request, res: Response) => {
    try{
        const responseUser = await registerNewUser(body);
        res.send(responseUser);
    }catch(e){
        handleHttp(res, "Error register user", e);
    }
}

const loginAuthCtrl = async ({ body }: Request, res: Response) => {
    const { email, password } = body;
    const responseUser = await loginUser({ email, password });

    if(responseUser === "Password Incorrect"){
        res.status(403)
        res.send(responseUser);
    }else{
        res.send(responseUser);
    }
}

export { registerAuthCtrl, loginAuthCtrl }