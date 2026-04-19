import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null)

  useEffect(() => {
    // Only seed localStorage if it has never been set before
    // Previously setLocalStorage() ran every time and wiped all admin changes
    const stored = localStorage.getItem('employees')
    if (!stored) {
      setLocalStorage()
    }
    const { employees } = getLocalStorage()
    setuserData(employees)
  }, [])

  return (
    <AuthContext.Provider value={[userData, setuserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider