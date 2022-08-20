import  { React,useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineShoppingCart,AiFillCloseCircle,AiFillPlusCircle,AiFillMinusCircle} from 'react-icons/ai'
import {BsFillBagCheckFill} from 'react-icons/bs'
import {MdAccountCircle} from 'react-icons/md'
const Navbartwo = ({Logout,user,cart,addtoCart,removeFromCart,clearCart,subTotal}) => {
    const [dropdodown,setDropdodown]=useState(false)
    
   
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
    <div className="flex justify-center md:flex-row md:justify-start flex-col items-center sticky top-0 z-10" id="navbartwo">
        <div className='logo mx-5'><Image src={'/logo.png'} alt="logo" width={80} height={80}/></div>
        <div className='nav'>
            <ul className="flex space-x-2 items-center font-bold md:text-xl">
                <Link href='/login'><a><li>Home</li></a></Link>
                <Link href='/Masssgainer'><a><li>Masssgainer</li></a></Link>
                <Link href='/Brand'><a><li>Brand</li></a></Link>
                <Link href='/sports_nutrition'><a><li>Sports Nutrition</li></a></Link>
            </ul>
        </div>
      
               
        <div className='cart absolute flex space-x-6 right-0 top-2 mx-5'>
      <a onMouseOver={()=>setDropdodown(true)} onMouseLeave={()=>setDropdodown(false)}>
        { dropdodown && <div className='absolute right-8  top-5 rounded-md px-5 w-36 mx-5 bg-green-500'>
                <ul>
                  <Link href={"/myaccount"}><a><li className="py-2 text-sm hover:text-white cursor-pointer">MyAccount</li></a></Link>
                  <Link href={"/orders"}><a><li className="py-2 text-sm hover:text-white cursor-pointer">Orders</li></a></Link>
                 <a onClick={Logout}><li className="py-2 text-sm hover:text-white cursor-pointer">Logout</li></a>
                </ul>
                </div>}
                
        {user.value && <MdAccountCircle className='text-xl md:text-2xl cursor-pointer'  />}
        </a> 
                {!user.value && <Link className="flex items-center cursor-pointer hover:text-gray-200" href={'/login'}>
                <a><button className="bg-green-700 px-2 py-1">Login</button></a> 
                </Link>}
        <AiOutlineShoppingCart className='text-xl md:text-2xl cursor-pointer' onClick={toggleCart} />
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
    </div>
  )
}

export default Navbartwo