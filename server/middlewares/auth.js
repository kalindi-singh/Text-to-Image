import jwt from 'jsonwebtoken'

const userAuth = async (req , res , next) => {     //will be execute before controller func whenever we hit api

    const {token} =req.headers;

    if(!token){
        return res.json({success:false, message: 'Not Authorized. Login Again'});//if token is unavailable  
    }
    try {
        const tokenDecode = jwt.verify(token, process.env.JWT_SECRET)

        if(tokenDecode.id){
            req.body = req.body || {};
            req.body.userId=tokenDecode.id;
        }else{
            return res.json({success:false,message:'Not Authorized. Login Again'});
        }

        next();

    } catch (error) {
        res.json({success:false, message:error.message})
    }
};

export default userAuth;