import React from 'react'
import LoginForm from '../components/LoginForm'

const Login: React.FunctionComponent = () => {
  return (
    <div className="bg-cover h-screen w-screen"
      style={{ backgroundImage: 'url(https://wallpaperset.com/w/full/b/0/0/487576.jpg)' }}>
      <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
        <div
          className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2
                     bg-yellow-100 sm:mx-0"
          style={{ height: '500px' }}
        >
          <div className="flex flex-col w-full md:w-1/2 p-4">
            <div className="flex flex-col flex-1 justify-center mb-8">
              <h1 className="text-4xl text-center font-thin">Welcome Back</h1>
              <div className="w-full mt-4">
                <LoginForm />
              </div>
            </div>
          </div>
          <div
            className="hidden md:block md:w-1/2 rounded-r-lg bg-cover bg-center"
            style={{ backgroundImage: 'url(https://i.pinimg.com/originals/d5/a4/98/d5a4989c7dcd9d01342823e8ba6be6b7.jpg)' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Login
