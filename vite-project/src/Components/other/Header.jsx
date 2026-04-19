import React, { useContext, useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'
import { AuthContext } from '../../Context/AuthProvider'

const Header = (props) => {
  // const [username, setusername] = useState('')


  // if(!data){
  //   setusername('Admin')
  // }else{
  //   setusername(data?.fname)
  // }
  const logOutUser = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload();
  }
  return (
    <div className='flex items-bottom justify-between text-white'>
        <h1 className='text-xxl'>Hello <br/> <span className='text-3xl font-semibold'>{props.data?.fname || 'Admin'}</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-white  px-5 py-2 rounded-sm text-lg font-medium'>Log Out</button>

    </div>
  )
}

export default Header