import { useState } from "react"
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import '../assets/styles.css'

export default function Register() {

  const navigate = useNavigate()

  const [ data, setData] = useState({
    firstName : '',
    lastName : '',
    email : '',
    password : '',
  })

  const registerUser = async (e) => {
    e.preventDefault()
    const { firstName, lastName, email, password } = data
    try {
      const { data } = await axios.post('/register', {
        firstName, lastName, email, password
      })
      if (data.error) 
        toast.error(data.error)
      else {
        setData({})
        toast.success('Registered Succesfully, Welcome!')
        navigate('/login')
      }
    } 
    catch (error) {
      console.log(error.message)
    }
    
  }


  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto flex bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 overflow-hidden justify-center items-center">
          <div className="w-full">

            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-900"> Sign Up </h1>  
              <p className="mt-2 text-gray-500">Sign up to create your Account</p>
            </div>

            <div className="mt-5">
              <form onSubmit={registerUser}>

                <div className="relative mt-6">
                  <input 
                    type="text" 
                    value={data.firstName}
                    onChange={(e) => setData({...data, firstName:  e.target.value})}
                    placeholder='First Name'
                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    autoComplete="NA"
                  />
                  <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">First Name</label>
                </div>
              
                <div className="relative mt-6">
                  <input 
                    type="text" 
                    value={data.lastName}
                    onChange={(e) => setData({...data, lastName:  e.target.value})}
                    placeholder='Last Name'
                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    autoComplete="NA"
                  />
                  <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Last Name</label>
                </div>

                <div className="relative mt-6">
                  <input 
                    type="email" 
                    value={data.email}
                    onChange={(e) => setData({...data, email:  e.target.value})}
                    placeholder='Email Address'
                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    autoComplete="NA"
                  />
                  <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                </div>

                <div className="relative mt-6">
                  <input 
                    type="password" 
                    value={data.password}
                    onChange={(e) => setData({...data, password:  e.target.value})}
                    placeholder='Last Name'
                    className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    autoComplete="NA"
                  />
                  <label className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                </div>

                <div class="my-6">
                    <button type="submit" class="w-full rounded-md bg-blue-400 px-3 py-4 hover:bg-blue-500 text-white  text-xl ">Sign up</button>
                </div>

                <p class="text-center text-sm text-gray-500">Already have an account? 
                    <Link to='/login' className="font-bold text-gray-600 hover:underline "> Sign in</Link>
                </p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
