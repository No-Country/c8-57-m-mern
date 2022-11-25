import {model,Schema,Document} from 'mongoose'
import bcrypt from 'bcrypt'

enum MotivationLevel {
    siempre,
    usualmente,
    algunas_veces,
    nunca
  }

enum SecurityLevel {
    siempre,
    usualmente,
    algunas_veces,
    nunca
}

enum InterestLevel {
    escuche,
    aprender,
    indagar,
    creencias,
    no
}

export interface IUser extends Document {
    email:string;
    password:string;
    name?:string;
    token?:string;
    confirm?:boolean;
    bearer?:string;
    rol?:string;
    motivation?:MotivationLevel;
    security?:SecurityLevel;
    interest?:InterestLevel;
    comparePassword:(password:string) => Promise<Boolean>;
};



  console.log(MotivationLevel.usualmente, 'acaaaaaaaa')

const userSchema = new Schema({
    email: {
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    password: {
        type:String,
        required:true
    },
    name: {
        type:String,
    },
    token: {
        type: String
    },
    confirm:{
        type: Boolean,
        default: false,
    },
    bearer:{
        type: String
    },
    rol:{
        type:String,
        maxlength:30,
    },
    motivation:{
        type:String,
        enum:[MotivationLevel.siempre,MotivationLevel.usualmente, MotivationLevel.algunas_veces,MotivationLevel.nunca],
    },
    security:{
        type:String,
        enum:[SecurityLevel.siempre,SecurityLevel.usualmente, SecurityLevel.algunas_veces,SecurityLevel.nunca],
    },
    interest:{
        type:String,
        enum:[InterestLevel.escuche,InterestLevel.aprender, InterestLevel.indagar,InterestLevel.creencias,InterestLevel.no],
    },

});

// Este es un middleware para verificar si se modifico el password del usuario
userSchema.pre<IUser>("save", async function(next){
    const user = this;

    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;

    next();
});

userSchema.methods.comparePassword = async function(password:string):Promise<Boolean>{
   return await bcrypt.compare(password, this.password);
};

export default model<IUser>("User",userSchema);
