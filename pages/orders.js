import Image from 'next/image'
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
const MyOrder = ({orders}) => {
  console.log(orders)
  const router=useRouter()
  const id=router.query
 
  useEffect(()=>{
    const fetchOrders=async()=>{
      const response = await fetch('/api/Cod',{
        method: 'GET', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({token:localStorage.getItem('token')}),
      });
     let res=await response.json()
    }
    if(!localStorage.getItem('token')){
      router.push('/')
    }else{
      fetchOrders()
  }
  },[router])
 

  return (
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-24 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest">MuscleBlaze</h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">order id:{orders.orderId}</h1>
          <div className="flex text-center mb-4">
            <a className="flex-grow  py-2 text-lg px-3">Item Description</a>
            <a className="flex-grow  border-gray-300  py-2 text-lg px-3">Quantity</a>
            <a className="flex-grow  border-gray-300  py-2 text-lg px-3">Item Total</a>
          </div>
      
          <p className="leading-relaxed mb-4">your order has been succesfully placed . Your Payment Status is {orders.status}</p>
        {Object.keys(orders.products).map((key)=>{
         return <div key={key} className="flex border-t border-gray-200 py-2">
          <span className="text-gray-500">{orders.products[key].title}</span>
          <span className="ml-auto text-gray-900"> {orders.products[key].qty}</span>
          <span className="ml-auto text-gray-900">{orders.products[key].price}</span>
        </div>
         })}
          <div className="flex flex-col">
            <span className="title-font font-medium text-2xl text-gray-900">Subtotal: ${orders.amount}</span>
<div className='my-2'>
<button className="flex  mx-0 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Track Order</button>
  </div>            
          </div>
        </div>
        <Image alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" width={400} height={400} src="https://dummyimage.com/400x400"/>
      </div>
    </div>
  </section>
  )
}



export default MyOrder