import userModel from "../models/userModel"

const generateImage =async (req,res) =>{
    try {
        
        const {userId, prompt} = req.body  
        const user = await userModel.findById(userId)
        
        if(!user || !prompt){
            return res.json({success:false,message:'Missing details'})
        }

        if(user.creditBalance === 0 || user.creditBalance < 0){
            return res.json({success:false,message:'No Credit Balance', creditBalance:user.creditBalance})
        }

    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
    }
}