import React, { useState } from 'react'
import "./style.css"
import { FaSearch } from 'react-icons/fa'


const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false)
  const [bgColor, setBgColor] = useState('White')
  const handleClick = (e) => {
    setBgColor("#1a1a1a")
    if (e.target.className === 'container') {
      setShowInput(false)
      setBgColor('#fff')
    }
  }
  return (
    <div
      className='container'
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {
        showInput ? (
        <input type="text" placeholder='Search...' />
        ) : (
          <FaSearch onClick={() => setShowInput(true)} />
        )
      }
    </div>
  )
}

export default HiddenSearchBar