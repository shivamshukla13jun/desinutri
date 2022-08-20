import connectDB from "../../middleware/mongoose";
import Product from "../../modals/product";
const handler = async (req, res) => {
  if (req.method === 'POST') {
    // Check if name, email or password is provided
    const { title, slug, desc,img,category,price,mrp } = req.body;
    
        try {
          // Hash password to store it in DB
        
          var product = new Product({
            title, slug, desc,img,category,price,mrp
          });
          // Create new user
          var productcreated = await product.save();
          return res.status(200).send(productcreated);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);
