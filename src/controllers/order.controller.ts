import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { RequestExt } from "../interfaces/requestExt.iterface";

const getItem = async (req: RequestExt, res: Response) => {
    try {
        res.send({
            data: "Solo lo ve un usuario con sesión-jwt",
            user: req.user
        })
    }catch(e) {
        handleHttp(res, "Error get orders");
    }
}

export { getItem }