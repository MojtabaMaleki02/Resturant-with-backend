import React from 'react'
import Title from './Title'

const Header: React.FunctionComponent = () => {
  return (
    <header className="bg-yellow-200">
      <div className="container mx-auto px-6 py-3 h-12">
        <Title />
      </div>
    </header>
  )
}

export default Header
