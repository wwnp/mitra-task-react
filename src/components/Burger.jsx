import React from 'react'
import { IconContext } from 'react-icons'
import { GiHamburgerMenu } from 'react-icons/gi';

export const Burger = ({ color = 'black', size = '16px', onClick }) => {
  return (
    <IconContext.Provider
      value={{ color, size }}
    >
      <span
        className='pointer'
        onClick={onClick}
      >
        <GiHamburgerMenu></GiHamburgerMenu>
      </span>
    </IconContext.Provider>
  )
}