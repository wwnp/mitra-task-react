import React from 'react'
import { AiOutlineCloud } from 'react-icons/ai';

export const Download = ({ downloads }) => {
  return (
    <span className='d-flex align-items-center'>
      <AiOutlineCloud className='mx-1' size={'20px'}></AiOutlineCloud>{downloads}
    </span>
  )
}
