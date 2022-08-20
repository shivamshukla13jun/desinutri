import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Row1 = () => {

const [users,setUsers]=useState([])
  async function getUsers() {
    let url = 'http://localhost:3000/api/getproducts';
    try {
        let res = await fetch(url);
        const data=(await res.json())
        setUsers(data.product)
       console.log(data)

        
    } catch (error) {
        console.log(error);
    }
}

    
 
useEffect(()=>{
  getUsers();
},[])

  return (

    <>


     <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            
            {

users.map((current)=>{
    return (
    
      <div key={current._id} className="lg:w-1/4 md:w-1/2 p-4 w-full mx-auto">
      <Link href={'/product/Muscleblaze'} className="block relative 420 rounded overflow-hidden">
        <Image alt="ecommerce" width={420} height={420} className="object-cover object-center w-full h-full block" src={current.img} />
      </Link>
      
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{current.category}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{current.title}</h2>
        <p className="mt-1">$ {current.price}</p>
      </div>
      <button >Add to Cart</button>
    </div>     
    
    )
})
}
          
           
          </div>
        </div>
      </section>
    </>
  )
}

// async function getServerSideProps(context) {
//   if (!mongoose.connections[0].readyState) {
//     const connection_uri='mongodb://localhost:27017/desinutri'
//     await mongoose.connect(connection_uri)
//     return handler(req, res);
//   }
//   let product=await Product.find()
  
//   return {
//     props: {product}, // will be passed to the page component as props
//   }
// }
export default Row1