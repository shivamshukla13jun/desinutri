import connectDB from '../../middleware/mongoose'
import Order from '../../modals/Order'
import jsonwebtoken from 'jsonwebtoken'
const handler=async(req, res)=> {
    const token=req.body.token
    const data=jsonwebtoken.verify(token,process.env.JWT_SECRET)
    let orders=await Order.find({email:data.email})
  }

  export default connectDB(handler)