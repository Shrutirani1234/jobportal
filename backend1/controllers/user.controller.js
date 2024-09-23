import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async(req,res)=> {
    try {
        const {fullname, email, phonenumber, password, role} = req.body;
        if(!fullname || !email || !phonenumber || !password || !role){
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message: 'User already exist with this email',
                success: false
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await user.create({
            fullname,
            email,
            phonenumber,
            password: hashedPassword,
            role
        })
    } catch (error){

    }
}
export const login = async (req,res) => {
    try{
        const {email,password, role} = req.body;
        if(!email || !password || !role){
            return res.status(400).json({
                message: "Something is missing",
                success: false
            });
        };
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false
            })
        }
        const isPasswordMatch = await bcrypt.compare(pasword, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message: "Incorrect email or password.",
                success: false
            })
        };
        if(role =! user.role){
            return res.status(400).json({
                message: "Account doesn't exist.",
                success: false
            })
            
        };

        const tokenData = {
            userId: User._id
        }
        const token = await JsonWebTokenError.sign(tokenData,process.env.SECRET_KEY,{expiresIn: '1d'});

        return res.status(200).cookie("token", token, {maxAge: 1*24*60*60*1000, httpOnly:true, saneSite:'Strict'}).json({
            message: 'welcome back ${user.fullname}',
            success: true
            
        })
    } catch (error) {

    }
}