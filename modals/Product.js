import mongoose from "mongoose";
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const productSchema= new mongoose.Schema({
    title:{type:String, required:true},
    slug:{type:String, required:true,unique:true,slug: "title"},
    desc:{type:String, required:true},
    img:{type:String, required:true},
    category:{type:String, required:true},
    price:{type:Number,required:true},
    mrp:{type:Number,required:true},

  },{timestamps:true});
//EXPORT MODULE
mongoose.models = {};

var Product = mongoose.model('Product', productSchema);

export default Product;