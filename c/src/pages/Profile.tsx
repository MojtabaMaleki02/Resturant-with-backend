import React from 'react'
import User from '../components/User'

const Login: React.FunctionComponent = () => {
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-gradient-to-r from-white to-gray-500"
      style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/1611276.jpg)' }}
    >
      <User />
    </div>
  )
}

export default Login
