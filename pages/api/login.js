import connectDB from "../../middleware/mongoose";
import User from "../../modals/Users";
const jwt = require('jsonwebtoken');


const handler = async (req, res) => {
  if (req.method == 'POST') {
             // Check if name, email or password is provided
    const { name,email,password } = req.body;
         console.log(req.body)
         
         let user=await User.findOne({email:email,password:password})
        if(user){
          var token = jwt.sign({email:user.email,name:user.name}, 'jwtsecret',{
            expiresIn:'1d'
          });

            return res.status(200).send({success:true,token});
          
               
        }else{
            return res.status(404).send('Please Enter Valid Details');
        }
      
      
  } else {
    res.status(422).send('req_method_not_supported');
  }
};

export default connectDB(handler);
