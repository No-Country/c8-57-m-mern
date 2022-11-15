import {Strategy, ExtractJwt, StrategyOptions} from 'passport-jwt'
import User from '../models/user';

const options:StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || 'somesecrettoken'
};

export default  new Strategy(options, async (payload,done)=>{
     try {
        const user = await User.findById(payload.id);
        if (user) {
            return done(null,user);
        }
        return done(null, false);

     } catch (error) {
        console.log(error)
     }
})