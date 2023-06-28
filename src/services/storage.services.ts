import { Storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage.model";

const insertStorage = async ({fileName, path, idUser}: Storage) =>  {
    const responseStorage = await StorageModel.create({fileName, path, idUser});
    return responseStorage;
};

export { insertStorage }