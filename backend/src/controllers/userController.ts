import {Request,Response} from 'express';
import User from '../models/user';
import createJWT from '../helpers/generateJWT';
import generateId from '../helpers/generateID';
 

//Permite al usuario hacer login y entrar al sistema
export const login = async (req: Request, res: Response):Promise<Response | undefined> => {
    try {
       
        const { email, password, } = req.body
        const user = await User.findOne({ email })
       
        //Verificar si ya existe el usuario 
        if (!user) {
            return res.json({msg:"The User does not exists", email:false})
        }
        //Comprobar su password
        if (await user?.comparePassword(password)) {
          //Retorna todos los datos del usuario , el token y un booleano para validar que logueo correctamente
          return res.json({ 
            ...user?.toJSON(),
            token:createJWT(user?._id),
            login: true
           })
        }
      return res.json({msg: "The password is wrong", login: false })

     
      } catch (error) {
        console.log(error)
      }

}

//Permite registrar un nuevo Usuario
export const register = async (req: Request, res: Response):Promise<Response | undefined> => {
    //Evitar registros duplicados
    const {email}=req.body
    const user = await User.findOne({email})
    if (user) {
        return res.json({msg:"The User already Exists", register:false})
    }

    const newUser = new User(req.body)
    newUser.token= generateId()
    await newUser.save()

    return res.json({msg:"User created", register:true})
}

//Permite buscar un usuario por id

export const findUserById = async (req: Request, res: Response):Promise<Response | undefined> => {
  //Buscamos por id
  const {id} = req.params
  const user = await User.findById(id)
  if(user) {
    return res.json({msg:"Found User", user, found: true})
  }
  return res.json({msg:"Not Found User", found:false})
}

//Eliminar usuario por id

export const deleteUserById = async (req: Request, res: Response):Promise<Response | undefined> => {
  const {id} = req.params
  const user = await User.findByIdAndDelete(id)
  if(user){
    return res.json({msg:"User deleted", user, deleted: true})
  }
  return res.json({msg: "User not deleted", deleted: false})
}