import connectDB from "../../middleware/mongoose";
import Users from "../../modals/Users";
const CryptoJS = require("crypto-js");


const handler = async (req, res) => {
  if (req.method === 'POST') {
   
    
      
             // Check if name, email or password is provided
    const { name,email,password } = req.body;
         console.log(req.body)
         let user=new Users({name,email,password});
         const userLogin=await Users.findOne({email:email});
         if(userLogin){
          // User exists
          return res.status(404).send('email already')
         }else{
          await user.save()  
          return res.status(201).send('success');
         }
        
        
      
  } else {
    res.status(500).send('req_method_not_supported');
  }
};

export default connectDB(handler);
