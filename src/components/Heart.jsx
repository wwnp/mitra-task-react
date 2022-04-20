import React from 'react'
import { IconContext } from 'react-icons'
import { AiFillHeart } from 'react-icons/ai';

export const Heart = ({ color = 'red', size = '16px', likes }) => {
  return (
    <IconContext.Provider
      value={{ color, size }}
    >
      <span className='d-flex align-items-center'>
        <AiFillHeart className='mx-1' size={'20px'}></AiFillHeart>{likes}
      </span>
    </IconContext.Provider>
  )
}