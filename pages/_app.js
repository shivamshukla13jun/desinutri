import Footer from '../components/Footer'
import '../styles/globals.css'
import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbartwo from '../components/Navbartwo';



const MyApp=({ Component, pageProps })=> {
  const router=useRouter()
  const[cart,setCart]=useState({})
  const[subTotal,setSubtotal]=useState()
  const[user,setUser]=useState({value:null})
  const[key,setKeys]=useState(0)

  
// useeffect
useEffect(() => {
 
  console.log('hey i m use effect')
  try {
    if(localStorage.getItem("cart")){
      setCart(JSON.parse(localStorage.getItem("cart")))
      saveCart(JSON.parse(localStorage.getItem("cart")))
      
    }
  } catch (error) {
    console.log(error);
    localStorage.clear()
  }
  const token=localStorage.getItem("token")
  if(token){
    setUser({value:token})
    setKeys(Math.random())
  }
},[router.query])

const Logout=()=>{
  localStorage.removeItem("token")
  setUser({value:null})
  setKeys(Math.random())
}

// end useeffect
  //  save cart
  const saveCart=(myCart)=>{
    localStorage.setItem("cart",JSON.stringify(myCart))
    let subt=0
    let keys=Object.keys(myCart)
    for(let i=0;i<keys.length;i++){
      console.log(keys)
      subt+=myCart[keys[i]].price*myCart[keys[i]].qty
    }
    setSubtotal(subt)
  }
  // end save cart
  // add to cart function
const addtoCart=(itemCode,qty,price,title,size,variant)=>{
  let newCart=cart;
  if(itemCode in cart){
    newCart[itemCode].qty=cart[itemCode].qty + qty
  }else{
    newCart[itemCode]={qty:1,price,title,size,variant}

  }
  setCart(newCart)
  console.log(newCart)
  saveCart(newCart)
}
// add to  cart end
// buy now
const BuyNow=(itemCode,qty,price,title,size,variant)=>{
  saveCart({})
  let newCart={itemCode:{qty:1,price,title,size,variant}};

  setCart(newCart)
  saveCart(newCart)
  console.log(newCart)
 router.push('/checkout')
}
// end buy now
// clear cart
const clearCart=()=>{
  setCart({})
  saveCart({})
}
// end clear cart
// remove cart function
const removeFromCart=(itemCode,qty,price,title,size,variant)=>{
  let newCart=JSON.parse(JSON.stringify(cart));
  if(itemCode in cart){
    newCart[itemCode].qty=cart[itemCode].qty - qty
  }
  console.log(newCart[itemCode])
  if(newCart[itemCode]['qty']<0){
    delete newCart[itemCode]
  }
  setCart(newCart)
  saveCart(newCart)
}
// remove   cart end
return <>

<Navbartwo Logout={Logout} user={user} key={key} BuyNow={BuyNow} cart={cart} addtoCart={addtoCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/>
  {/* <Navbar  user={user} key={key} BuyNow={BuyNow} cart={cart} addtoCart={addtoCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/> */}
  <Component BuyNow={BuyNow} cart={cart} addtoCart={addtoCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
  <Footer/>
  </>
}

export default MyApp
