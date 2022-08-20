import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineUserAdd, AiFillHeart, AiOutlineShoppingCart,AiFillCloseCircle,AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai'
import {BsFillBagCheckFill} from 'react-icons/bs'
import {MdAccountCircle} from 'react-icons/md'
const Navbar = ({user,cart,addtoCart,removeFromCart,clearCart,subTotal}) => {
  // console.log(cart,addtoCart,removeFromCart,clearCart,subTotal)
  const [dropdodown,setDropdodown]=useState(false)
  const toggleDropdown=()=>{
    setDropdodown(!dropdodown)

  }
  const toggleCart=()=>{
if(ref.current.classList.contains('translate-x-full')){
  ref.current.classList.remove('translate-x-full')
  ref.current.classList.add('translate-x-0')
}
else if(!ref.current.classList.contains('translate-x-full')){
  ref.current.classList.remove('translate-x-0')
  ref.current.classList.add('translate-x-full')
  }
}
  const ref=useRef()

  return (
    <>
      {/* <!-- follow me on twitter @asad_codes --> */}

      <div className="flex justify-center md:flex-row md:justify-start flex-col items-center sticky top-0 z-10">
        <section className="relative mx-auto">
          {/* <!-- navbar --> */}
          <nav className="flex justify-between bg-cyan-400 text-white w-screen">
            <div className="px-5 xl:px-12 py-6 flex w-full items-center">
              <Link className="text-3xl font-bold font-heading" href="/">
                <Image className="h-9" src="/logo.png" alt="logo" width={40} height={40} />
              </Link>
              {/* <!-- Nav Links --> */}
              <ul className=" md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li><Link className="hover:text-gray-200" href="/">Home</Link></li>
                <li><Link className="hover:text-gray-200" href="/Brands">Brands</Link></li>
                <li><Link className="hover:text-gray-200" href="/sports_nutrition">Sports Nutrition</Link></li>
                <li><Link className="hover:text-gray-200" href="/conact">Contact Us</Link></li>
              </ul>
              {/* <!-- Header Icons --> */}
              <div className=" xl:flex items-center space-x-5 ">
                <div className="flex items-center space-x-3 ">
                <div className='absolute right-0 top-4 mx-5 bg-green-500'>
                <ul>
                  <li>MyAccount</li>
                  <li>Orders</li>
                  <li>Logout</li>
                </ul>
                </div>
                {user.value && <MdAccountCircle onMouseOver={toggleDropdown} onMouseLeave={toggleDropdown} />}
                {!user.value && <Link className="flex items-center cursor-pointer hover:text-gray-200" href={'/login'}>
                <a><button className="bg-green-700 px-2 py-1">Login</button></a> 
                </Link>}
                  <AiOutlineShoppingCart className="cursor-pointer" onClick={toggleCart}  />
                </div>
                
                  {/* cart sidebar */}
                <div ref={ref} className='sidebar h-[100vh] z-10 absolute top-0 right-0 w-72 py-10 px-8 bg-indigo-200 transform transition-transform translate-x-full'>
               <h2 className=''>this is my shoping cart</h2>
               <h2 className='font-bold text-xl '>shoping cart</h2>
               <span onClick={toggleCart} className='absolute top-0 right-2 text-2xl'><AiFillCloseCircle/></span>
                <ol className='text-black list-decimal font-semibold'>
                  {Object.keys(cart).length===0 && 
                <div className='my-4  font-normal'>no items in cart!</div>}
               {Object.keys(cart).map((k)=>{ return <li key={k}>
                  <div className='item flex my-5'>
                  <div className=' w-2/3  font-semibold'>{cart[k].title}</div>
                  <div className=' w-1/3 flex font-semibold justify-center text-lg  items-center '><AiFillMinusCircle  onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].title,cart[k].variant,cart[k].size)}} className='cursor-pointer text-indigo-500' /><span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillPlusCircle  onClick={()=>{addtoCart(k,1,cart[k].price,cart[k].title,cart[k].variant,cart[k].size)}} className='cursor-pointer text-indigo-500' /></div>
                  </div>
                  <span className='font-bold'>Subtotal: {subTotal}₹</span>      

                  </li>
                  
                })}
                 
                  
                </ol>
                <div className='flex justify-center'>
                <button className="flex mx-auto mr-2 mt-16 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm"><BsFillBagCheckFill className="m-1"/><Link href={"/checkout"}>Checkout</Link></button>
                <button onClick={clearCart} className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm"><BsFillBagCheckFill className="m-1"/>clearCart</button>
                </div>

                </div>
                  {/* cart side */}
                {/* <!-- Sign In / Register      --> */}
                
              </div>
            </div>
          </nav>
        </section>
      </div>


    </>
  );
}

export default Navbar