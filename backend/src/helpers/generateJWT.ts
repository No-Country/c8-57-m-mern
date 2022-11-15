import jwt from 'jsonwebtoken'
import { IUser } from '../models/user';

const createJWT = (user:IUser) => {
    return jwt.sign({ id:user._id, email: user.email }, process.env.JWT_SECRET || 'somesecrettoken', {
        expiresIn: "1d"
    });
}

export default createJWT