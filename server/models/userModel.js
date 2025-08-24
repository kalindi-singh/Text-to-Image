import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name:{type :String, required :true},
    email : {type :String, required :true, unique: true},
    password: {type :String, required :true},
    creditBalance: {type:Number, default: 5 },
})

const userModel = mongoose.models.user ||  mongoose.model("user", userSchema) //using userSchema it will either use preexisting model from user models or it will create a new model named user

export default userModel;