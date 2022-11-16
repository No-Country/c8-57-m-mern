import { Request, Response } from 'express';
import User from '../models/user';
import createJWT from '../helpers/generateJWT';
import generateId from '../helpers/generateID';


//Permite al usuario hacer login y entrar al sistema
export const login = async (req: Request, res: Response): Promise<Response | undefined> => {
    try {

        const { email, password, } = req.body
        const user = await User.findOne({ email })

        //Verificar si ya existe el usuario 
        if (!user) {
            return res.json({ msg: "The User does not exists", email: false })
        }
        //Comprobar su password
        if (await user?.comparePassword(password)) {
            //Retorna todos los datos del usuario , el token y un booleano para validar que logueo correctamente
            return res.json({
                ...user?.toJSON(),
                token: createJWT(user?._id),
                login: true
            })
        }
        return res.json({ msg: "The password is wrong", login: false })


    } catch (error) {
        console.log(error)
    }

}

//Permite registrar un nuevo Usuario
export const register = async (req: Request, res: Response): Promise<Response | undefined> => {
    //Evitar registros duplicados
    const { email } = req.body
    const user = await User.findOne({ email })
    if (user) {
        return res.json({ msg: "The User already Exists", register: false })
    }

    const newUser = new User(req.body)
    newUser.token = generateId()
    await newUser.save()

    return res.json({ msg: "User created", register: true })
}

// Genera un nuevo password
export const newPassword = async (req: Request, res: Response): Promise<Response | any> => {
    const { token } = req.params
    const { password } = req.body
    //Busca el usuario que tenga el token recibido por params
    const user =  await User.findOne({token})

    if (user) {
        user.password = password
        user.token = ''
        try {
            //guarda los nuevos valores
            await user.save()
            //Retorna un mensaje y un estado en true cuando genera la nueva contraseña
            res.json({ msg: 'Password modified successfully',newPassword:true })
        } catch (error) {
            console.log(error)
        }
    } else {
        res.json({ msg: 'Invalid Token',newPassword:false })
    }

}