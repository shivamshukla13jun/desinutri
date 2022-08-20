import connectDB from "../../middleware/mongoose"
import Order from "../../modals/Order"

export default async function handler(req, res) {
    if(req.method=="POST")
      try {
        // if(!email && !name && !address && !phone && !amount && !orderId && !products ){
        //     res.status(404).json("Please enter details")
        // }
        let order=new Order({
            email:req.body.email,
            name:req.body.name,
            address:req.body.address,
            phone:req.body.phone,
            amount:req.body.subTotal,
            orderId:req.body.oid,
            products:req.body.cart,
        })
        await order.save()
        res.status(200).json("Your Order is Generated");
        
    }
       catch (error) {
        console.log(error)
      }
    
  }


  