import connectDB from "../../middleware/mongoose"
import Order from "../../modals/Order"

const handler=async(req, res)=> {
    // online payment
    if(req.body.STATUS=='TXN_SUCCESS'){
     let order= await Order.findOneAndUpdate({orderId:req.body.ORDERID},{status:'Paid',})
    }
    // Cash On Delivery
    else if(req.body.STATUS=='Pending'){
    let order=  await Order.findOneAndUpdate({orderId:req.body.ORDERID},{status:'Pending',})
    }
    res.redirect('/order?id'+ order._id,200)
  }


export default connectDB(handler)
  
