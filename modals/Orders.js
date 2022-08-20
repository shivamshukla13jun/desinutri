import mongoose from "mongoose";

const orderSchema= new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    orderId:{type:String, required:true},
    paymentInfo:{type:String,default:''},
    phone:{type:Number,required:true},
    products:{type:Object,required:true},
        address:{type:String,required:true},
        amount:{type:Number,required:true},
        status:{type:String,default:'pending'},
  },{timestamps:true});
  mongoose.models={}
  export default mongoose.models.Orders || mongoose.model('Orders',orderSchema)