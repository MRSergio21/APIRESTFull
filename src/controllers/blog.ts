import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"

const getBlog = (req: Request, res: Response) => {
    try{

    }catch(e){
        handleHttp(res, "Error get Blog");
    }
}

const getBlogs = (req: Request, res: Response) => {
    try{

    }catch(e){
        handleHttp(res, "Error get Blogs");
    }

}

const updateBlog = (req: Request, res: Response) => {
    try{

    }catch(e){
        handleHttp(res, "Error update Blog");
    }

}

const postBlog = ({ body }: Request, res: Response) => {
    try{
        res.send(body)
    }catch(e){
        handleHttp(res, "Error post Blog");
    }
}

const deleteBlog = (req: Request, res: Response) => {
    try{

    }catch(e){
        handleHttp(res, "Error delete Blog");
    }
    
}

export { getBlog, getBlogs, updateBlog, postBlog, deleteBlog }