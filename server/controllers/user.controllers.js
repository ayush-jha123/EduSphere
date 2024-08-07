import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";

export const signup=async(req,res)=>{
    const {name,email,password,confirmPassword,profilePicture}=req.body;
    try {
        const existingUser=await User.findOne({email});
        if(existingUser) return res.status(404).json("User already exist");
        if(password!=confirmPassword) return res.status(404).json("Password not matched");
        const hashedPassword=bcryptjs.hashSync(password,10);
        const result=await User.create({name,email,password:hashedPassword,profilePicture});
        const token=await jwt.sign({id:result._id,email},process.env.JWT_SECRET,{expiresIn:'1h'});
         return res.status(200).json({result,token});
    } catch (error) {
        res.status(500).json("Something went Wrong")
    }
}

export const signin=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const existingUser=await User.findOne({email});
        if(!existingUser) return res.status(400).json("User doesn't exist");
        const validPssword=bcryptjs.compareSync(password,existingUser.password);
        if(!validPssword) return res.status(400).json('Wrong credentials');
        const token=await jwt.sign({id:existingUser._id,email},process.env.JWT_SECRET,{expiresIn:'1h'});
        return res.status(200).json({token});
    } catch (error) {
        res.status(500).json('something went wrong');
    }
}

export const googleAuth=async(req,res)=>{
    const {name,email,photo}=req.body;
    try {
        const existingUser=await User.findOne({email});
        if(existingUser) {
            const {password,...rest}=existingUser?._doc;
            return res.status(200).json({rest});
        }else{
            const generatedPassword=Math.random().toString(36).slice(-8)+Math.random().toString(36).slice(-8);
            const hashedPassword= bcryptjs.hashSync(generatedPassword,10);
            const result=await User.create({name,email,hashedPassword,photo});
            const token=await jwt.sign({id:result._id,email},process.env.JWT_SECRET,{expiresIn:'1h'});
            return res.status(200).json({result,token});
        } 
    } catch (error) {
        res.status(500).json('Could not login with google')
    }
}