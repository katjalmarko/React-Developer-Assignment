import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      
      <div className='header-left'>
        {/* Router na prepínanie AddTask & TaskDatabase */}
      </div>
      
      <div className='header-center'>
        <h1>Database of your Tasks</h1>
      </div>

      <div className='header-right'>
        {/* User & Login */}
        {/* Filtering of Tasks */}
        {/* ... */}
      </div>

    </div>
  )
}

export default Header