import connectDB from "../../middleware/mongoose";
import Product from "../../modals/product";

const handler = async (req, res) => {
  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { title, slug, desc,img,category,size,color,price,availableqty } = req.body;
    
        try {
          // Hash password to store it in DB
        for(let i=0;i<req.body.length;i++){
            let p=await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
        }
        return res.status(200).send({success:"success"});
        } catch (error) {
          return res.status(500).send(error.message);
        }
      
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);
