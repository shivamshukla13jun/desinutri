import Link from 'next/link'
import { useRouter } from 'next/router';
import {React,useState,useEffect} from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image'
const Signup = () => {
  const router=useRouter()
  const [name, Setname] = useState()
  const [email, Setemail] = useState()
  const [password, Setpassword] = useState()

  const handleChange=(e)=>{
    if(e.target.name=='name'){
      Setname(e.target.value)
    }
    else if(e.target.name=='email'){
      Setemail(e.target.value)
    }
    else if(e.target.name=='password'){
      Setpassword(e.target.value)
    }
  }
  const handleSubmit=async (e)=>{
    e.preventDefault();
   try {
    const data={name,password,email}
    const response=await fetch('api/signup', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    if(response.status===404) {
      toast.error('🦄 Please Enter Proper deatails', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }else{
      toast.success('🦄 Please Enter Proper deatails', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
        router.push('/login')
    }
   } catch (error) {
    console.log(error)
   }

  }
  return (
    
    <>
      <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
    <Image width={60} height={60} className="mx-auto h-12 w-auto"  src="/logo.png" alt="Workflow"/>

      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up to your account</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
        Or
       <Link href={'/login'}><a href="#" className="font-medium text-indigo-600 hover:text-indigo-500"> Login</a></Link>
      </p>
    </div>
    <form onSubmit={handleSubmit} className="mt-8 space-y-6"  method="POST">
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="Name" className="sr-only">Name</label>
          <input value={name}  onChange={handleChange} id="name" name="name" type="text" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name"/>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email </label>
          <input value={email} onChange={handleChange} id="email" name="email" type="email" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address"/>
        </div>
        <div>
          <label  htmlFor="password" className="sr-only">Password</label>
          <input value={password} onChange={handleChange} id="password" name="password" type="password" autoComplete="off" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            {/* <!-- Heroicon name: solid/lock-closed --> */}
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Sign Up
        </button>
      </div>
    </form>
  </div>
</div> 
</>
  )
}

export default Signup