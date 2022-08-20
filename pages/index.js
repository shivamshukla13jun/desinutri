import mongoose, { mongo } from 'mongoose'
import Image from 'next/image'
import Link from 'next/link'
import {React} from 'react'
import Product from '../modals/product'
const Home = ({products,addtoCart}) => {
  return (
    <>
  <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            
            {

Object.keys(products).map((current)=>{
    return (
      <Link key={products[current]._id} href={`/product/${products[current].slug}`} className="block relative 420 rounded overflow-hidden">
       
      <div   className="lg:w-1/3 md:w-1/2 p-4 w-full mx-auto shadow mb-3">
        <Image alt="ecommerce" width={420} height={420} className="object-cover object-center w-full h-full block m-auto" src={products[current].img} />
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{products[current].category}</h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">{products[current].title}</h2>
        <p className="mt-1">${products[current].price}</p>
      </div>
      <button  onClick={()=>{addtoCart(products[current].slug,2,products[current].price,products[current].title)}}>Add to Cart</button>
    </div> 
    </Link>    
    
    )
})
}
          
           
          </div>
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
  let products=await Product.find()
  console.log(products)

  if (!products) {
    return {
      notFound: true,
    }
  }

  return {
    props: {products:JSON.parse(JSON.stringify(products))}, // will be passed to the page component as props
  }
}
export default Home