import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertStorage } from "../services/storage.services";
import { RequestExt } from "../interfaces/requestExt.iterface";
import { Storage } from "../interfaces/storage.interface";

const getFile = async (req: RequestExt, res: Response) => {
    try{
        const { user, file } = req;
        console.log(file);
        const dataToRegister: Storage = {
            fileName: `${file?.filename}`,
            idUser: `${user?.id}`,
            path: `${file?.path}`
        };
        const response = await insertStorage(dataToRegister)
        res.send(response)
    }catch(e){
        handleHttp(res, "Error get file")
    }
} 

export { getFile }