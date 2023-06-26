import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertCar, getCars, getCar, updateCar, deleteCar } from "../servicios/item.services";

const getItem = async ({ params }: Request, res: Response) => {
    try{
        const { id } = params;
        const response = await getCar(id);
        res.send(response);
    }catch(e){
        handleHttp(res, "Error get item");
    }
}

const getItems = async (req: Request, res: Response) => {
    try{
        const response = await getCars();
        res.send(response);
    }catch(e){
        handleHttp(res, "Error get items");
    }

}

const updateItem = async ({ params, body }: Request, res: Response) => {
    try{
        const { id } = params;
        const response = await updateCar(id, body);
        res.send(response);
    }catch(e){
        handleHttp(res, "Error update item");
    }
}

const postItem = async ({ body }: Request, res: Response) => {
    try{
        console.log(body);
        const respoponseItem = await insertCar(body);
        res.send(respoponseItem);
    }catch(e){
        handleHttp(res, "Error post item", e);
    }
}

const deleteItem = async ({ params }: Request, res: Response) => {
    try{
        const { id } = params;
        const response = await deleteCar(id);
        res.send(response);

    }catch(e){
        handleHttp(res, "Error delete item");
    }
    
}

export { getItem, getItems, updateItem, postItem, deleteItem }