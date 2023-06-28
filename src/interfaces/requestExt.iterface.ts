import { Request, Response } from "express"
import { JwtPayload } from "jsonwebtoken";

interface RequestExt extends Request {
    user?: String | JwtPayload;
}

export { RequestExt }