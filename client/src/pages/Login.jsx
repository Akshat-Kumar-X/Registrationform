import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const [ data, setData] = useState({ 
    email : '',
    password : '',
  })

  const LoginUser = async (e) => {
    e.preventDefault()
    const { email, password } = data
    try {
      const { data } = await axios.post('/login', { email, password })

      if (data.error) {
        toast.error(data.error)
      } else {
        setData({})
        navigate('/')
      }
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="container mx-auto">
        <div className="max-w-md mx-auto flex bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 overflow-hidden justify-center items-center">
          <div className="w-full">

            <div className="text-center">
              <h1 className="text-3xl font-semibold text-gray-900"> Sign in </h1>  
              <p className="mt-2 text-gray-500">Sign in to Access your Account</p>
            </div>

            <div className="mt-5">
              <form onSubmit={LoginUser}>

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
                    <button type="submit" class="w-full rounded-md bg-blue-400 px-3 py-4 hover:bg-blue-500 text-white  text-xl ">Sign in</button>
                </div>

                <p class="text-center text-sm text-gray-500">Don&#x27;t have an account yet? 
                    <Link to='/register' className="font-bold text-gray-600 hover:underline "> Sign up</Link>
                </p>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
