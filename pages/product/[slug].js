import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Image from 'next/image'
import {AiFillStar,AiFillHeart} from 'react-icons/ai'
import mongoose from 'mongoose'
import Product from '../../modals/product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Singleproducts = ({addtoCart,BuyNow,products}) => {
  
  console.log(products)
  const router = useRouter()
  const { slug } = router.query
  const [pin,setPin]=useState()
  const [service,setService]=useState()
  
const checkServiceability=async()=>{
 
  const pins= await fetch('http://localhost:3000/api/pincode')
  let pinJson=await pins.json()

  if(pinJson.includes(parseInt(pin))){
    setService(true)
    toast.success('Your Pincode is Serviceable', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }else{
    setService(false)
    toast.error('Your Pincode is Not Serviceable', {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }
 
}
const onChangepin=(e)=>{
  setPin(e.target.value)
}
  return (
    <>
    <section className="text-gray-600 body-font overflow-hidden">
    <ToastContainer
position="bottom-center"
autoClose={1000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>

  <div className="container px-5 py-24 mx-auto">
  {Object.keys(products).map((item)=>{
return (
  <div key={products[item].slug} className="lg:w-4/5 mx-auto flex flex-wrap">
      <Image  alt="ecommerce" width={400} height={400} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={products[item].img} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">{products[item].category}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{products[item].title}</h1>
        
        <div className="flex mb-4">
          <span className="flex items-center">
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
            <AiFillStar/>
        
            <span className="text-gray-600 ml-3">4 Reviews</span>
          </span>
         
        </div>
        <p className="leading-relaxed">{products[item].desc}</p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
           
            </div>
          </div>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900"><span>₹</span>{products[item].price}</span>
          <button onClick={()=>{BuyNow(slug,1,products[item].price,products[item].title)}} className="flex ml-4 text-white bg-indigo-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>
          <button onClick={()=>{addtoCart(slug,2,products[item].price,products[item].title)}} className="flex ml-4 text-white bg-indigo-500 border-0 py-2 px-2 md:px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to Cart</button>
          <div className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
           <AiFillHeart/>
          </div>
        </div>
        <div className='pin mt-6 flex space-x-2 text-sm'>
          <input placeholder='Enter Your Pin code' onChange={onChangepin} className='px-2 border-2 border-indigo-100 rounded-md' type="text"/>
          <button onClick={checkServiceability} className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'>Check</button>
        </div>
        {(!service && service!=null) && <div className='text-red-500 text-sm mt-3'>
          Sorry ,we are not delivered in your Area
        </div>}
        { (service && service!=null) && <div className='text-green-500 text-sm mt-3'>
          Yes ,we are delivered in your Area
        </div>}
      </div>
    </div>
)
  })}  
  </div>
</section>
    </>
  )
}

export async function getServerSideProps(context) {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    await mongoose.connect(process.env.MONGO_URI)
    // return handler(req, res);
  }
  let products=await Product.find({slug:context.query.slug})
  console.log(products)
  return {
    props: {products:JSON.parse(JSON.stringify(products))}, // will be passed to the page component as props
  }
}

export default Singleproducts