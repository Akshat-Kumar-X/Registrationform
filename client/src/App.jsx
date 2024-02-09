import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import './App.css'

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.withCredentials = true

export default function App() {
  return (
    <>
    <Toaster position='top-center' toastOptions={ {duration : 2000} }/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </>
  )
}
