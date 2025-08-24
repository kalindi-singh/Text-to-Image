// diff controlller func for user reg, login,logout

import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt' //pwd encryption
import jwt from 'jsonwebtoken' //user auth


//REGISTER USER
 const registerUser = async (req, res) => {
    try {
        const {name, email, password } =req.body;

        if(!name || !email || !password ){
            return res.json({success:false, message : 'Missing Details'})
        }

        //for encrypting the password, salt adds random string to password runs 10 times and hashed pwd is created
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const userData = {
            name,
            email,
            password :hashedPassword
            //creditBalance has been givern default value of 5
        }
        const newUser = new userModel(userData);
        const user = await newUser.save();

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)//token to be sent in response
        res.json({success:true,token,user:{name:user.name}})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
        
    }
 }

 //LOGIN USER
 const loginUser = async (req, res) => {
    try {
        const {email,password} = req.body;
        const user = await userModel.findOne({email})//find user using email provided by user from user body
        
        if(!user){
            return res.json({success:false, message : 'User does not exist'})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(isMatch){

            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
            res.json({success:true,token,user:{name:user.name}})

        }else{
            return res.json({success:false, message : 'Invalid Credentials'})

        }

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
        
    }
 }


 const userCredits = async(req,res) => {
    try {
        const {userId} = req.body;
        const user= await userModel.findById(userId)
        res.json({success:true , credits : user.creditBalance, user : {name: user.name}})


    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
 }

 export {registerUser,loginUser,userCredits}