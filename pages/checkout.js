import {React,useState} from 'react'
import { useRouter } from 'next/router'
import {AiFillPlusCircle,AiFillMinusCircle } from 'react-icons/ai'
import { ToastContainer,toast } from 'react-toastify'
const Checkout = ({cart,addtoCart,removeFromCart,clearCart,subTotal}) => {
const router=useRouter()
  async function inisiatePayment() {
    try {
      let oid=Math.floor(Math.random()* Date.now())
      const data={cart,subTotal,name,email,phone,address,oid}
      const response = await fetch('/api/Cod',{
            method: 'POST', // or 'PUT'
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
  
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }else{
        toast.success('🦄 Your Order Has Been Successfully Received', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          setTimeout(() => {
            clearCart()
            // router.push(`/orders`)
          }, 1000);
      }
  
      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
    }
  }
  
  // const inisiatePayment=async(e)=>{
  //   let oid=Math.floor(Math.random()* Date.now())
  //   //get transaction token
   
  //   const data={cart,subTotal,name,email,phone,address,oid}
  //   e.preventDefault();
  //  const response= fetch('/api/Cod', {
  //     method: 'POST', // or 'PUT'
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(data),
  //   })
  //   const text = await response.json();
  // return text;
  // }  
    // var config = {
    //   "root": "",
    //   "flow": "DEFAULT",
    //   "data": {
    //   "orderId": oid, /* update order id */
    //   "token": txnToken, /* update token value */
    //   "tokenType": "TXN_TOKEN",
    //   "amount":subTotal /* update amount */
    //   },
    //   "handler": {
    //     "notifyMerchant": function(eventName,data){
    //       console.log("notifyMerchant handler function called");
    //       console.log("eventName => ",eventName);
    //       console.log("data => ",data);
    //     } 
    //   }
    // };

   
    //     window.Paytm.CheckoutJS.onLoad(function excecuteAfterCompleteLoad() {
    //         // initialze configuration using init method 
    //         window.Paytm.CheckoutJS.init(config).then(function onSuccess() {
    //             // after successfully updating configuration, invoke JS Checkout
    //             window.Paytm.CheckoutJS.invoke();
    //         }).catch(function onError(error){
    //             console.log("error => ",error);
    //         });
    //     });
   

const [name, setName] = useState()
const [email, setEmail] = useState()
const [pincode, setPincode] = useState()
const [phone, setPhone] = useState()
const [address, setAddress] = useState()
const [city, setCity] = useState('')
const [state, setState] = useState()
const [disabled, setDisabled] = useState(true)

const handleChange=(e)=>{
  if(e.target.name=="name"){
    setName(e.target.value)
  }
  else if(e.target.name=="email"){
    setEmail(e.target.value)
  }
  else if(e.target.name=="phone"){
    setPhone(e.target.value)
  }
  else if(e.target.name=="address"){
    setAddress(e.target.value)
  }
  else if(e.target.name=="pincode"){
    setPincode(e.target.value)
  }
  else if(e.target.name=="city"){
    setCity(e.target.value)
  }
  else if(e.target.name=="state"){
    setState(e.target.value)
  }
 if (name && email && phone && address && pincode && city && state){
  setDisabled(false)
 }else{
  setDisabled(true)
 }
}
  return (
    <>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    <div className='container m-auto'>
      <h1 className='font-bold text-xl my-8 text-center'>Checkout</h1>
      <h2 className='font-bold text-xl'>1.Delivery Details</h2>
      <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input value={name} onChange={handleChange} autoComplete='off' type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input value={email} onChange={handleChange} autoComplete='off' type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        </div>
        <div className='px-2 w-full'>
          <div className="relative mb-4">
            <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
            <textarea value={address} onChange={handleChange} cols={30} rows={2}id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>    
          </div>
        </div>
        <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div className="relative mb-4">
            <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
            <input value={phone} onChange={handleChange} autoComplete='off' type="text" id="phone" name="phone" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className="relative mb-4">
            <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
            <input value={city} onChange={handleChange} autoComplete='off' type="text" id="city" name="city" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        </div>
        <div className='mx-auto flex my-2'>
        <div className='px-2 w-1/2'>
          <div className="relative mb-4">
            <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
            <input value={state} onChange={handleChange}  autoComplete='off' type="text" id="state" name="state" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className='px-2 w-1/2'>
          <div className="relative mb-4">
            <label htmlFor="Pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
            <input value={pincode} onChange={handleChange}  autoComplete='off' type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        </div>
        <h2 className='font-bold text-xl'>2.Review Cart items</h2>
        <div className='sidebar my-4 p-8 bg-indigo-200 '>
                  {/* cart sidebar */}
                <ol className='text-black list-decimal font-semibold'>
                  {Object.keys(cart).length===0 && 
                <div className='my-4  font-normal'>no items in cart!</div>}
               {Object.keys(cart).map((k)=>{ return <li key={k}>
                  <div className='item flex my-5'>
                  <div className=' font-semibold'>{cart[k].title}</div>
                  <div className=' flex font-semibold justify-center text-lg w-1/3  items-center ml-2 '><AiFillMinusCircle  onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].title,cart[k].variant,cart[k].size)}} className='cursor-pointer text-indigo-500' /><span className='mx-2 text-sm'>{cart[k].qty}</span><AiFillPlusCircle  onClick={()=>{addtoCart(k,1,cart[k].price,cart[k].title,cart[k].variant,cart[k].size)}} className='cursor-pointer text-indigo-500' /></div>
                  </div>
                  </li>})}
                  <span className='font-bold'>Subtotal: {subTotal}₹</span>      
                </ol>
                </div>
                  {/* cart side */}
                  <div className='mx-4'>
                  <button onClick={inisiatePayment} disabled={disabled} className="disabled:bg-indigo-300 mt-1 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-sm">Pay ₹{subTotal}</button>
                  </div>
    </div>
    </>
  )
}

export default Checkout