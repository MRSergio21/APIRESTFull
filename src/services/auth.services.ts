import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";
import { encrypt, verfied } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if(checkIs) return "Already exist";
    const passHash = await encrypt(password);
    const registerNewUser = await UserModel.create({ email, password:passHash, name });
    return registerNewUser;
}

const loginUser = async ( {email, password} : Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if(!checkIs) return "Not Found User";
    
    const passwordHash = checkIs.password
    const isCorrect = await verfied(password, passwordHash);

    if(!isCorrect) return "Password Incorrect";
    const token = generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs,
    }
    return data;
}

export { registerNewUser, loginUser }