import React, { useState } from 'react'
import { auth, googleProvider } from '../../firebase'
import { signInWithPopup } from 'firebase/auth'

const Login = ({ handleLogin, handleGoogleLogin }) => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(Email, Password)
    setEmail("")
    setPassword("")
  }

  const googleHandler = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      const user = result.user
      handleGoogleLogin(user)
    } catch (error) {
      alert("Google Sign-In failed: " + error.message)
    }
  }

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className='border-2 py-10 px-10 border-emerald-600 rounded-xl flex flex-col items-center gap-4 w-[400px]'>
        <h1 className='text-white text-2xl font-bold mb-2'>Employee Login</h1>

        <form onSubmit={submitHandler} className='flex flex-col items-center w-full gap-4'>
          <input
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='border-2 w-full text-xl bg-transparent text-white outline-none py-3 px-5 border-emerald-600 rounded-full placeholder:text-gray-400'
            type="email"
            placeholder='Enter Your Email'
          />
          <input
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='border-2 w-full text-xl bg-transparent text-white outline-none py-3 px-5 border-emerald-600 rounded-full placeholder:text-gray-400'
            type="password"
            placeholder='Enter Your Password'
          />
          <button
            type="submit"
            className='border-2 w-full text-xl border-none text-white outline-none py-3 px-5 bg-emerald-600 rounded-full hover:bg-emerald-700 transition'
          >
            Login
          </button>
        </form>

        <div className='flex items-center w-full gap-2 my-1'>
          <div className='flex-1 h-px bg-gray-500'></div>
          <span className='text-gray-400 text-sm'>OR</span>
          <div className='flex-1 h-px bg-gray-500'></div>
        </div>

        {/* Google Sign-In Button */}
        <button
          onClick={googleHandler}
          className='flex items-center justify-center gap-3 w-full py-3 px-5 bg-white text-gray-800 rounded-full text-lg font-medium hover:bg-gray-100 transition'
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google"
            className='w-6 h-6'
          />
          Sign in with Google
        </button>
      </div>
    </div>
  )
}

export default Login
