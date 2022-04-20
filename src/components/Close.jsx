import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillCloseSquare } from 'react-icons/ai';

export const Close = ({ color = 'black', size = '16px', onClick }) => {
  return (
    <IconContext.Provider
      value={{ color, size }}
    >
      <span
        className='pointer'
        onClick={onClick}
      >
        <AiFillCloseSquare></AiFillCloseSquare>
      </span>
    </IconContext.Provider>
  )
}