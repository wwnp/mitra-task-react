import React from 'react'
import { Badge } from 'react-bootstrap'

export const MyBadge = ({ color = 'primary', text = '___' }) => {
  return (
    <Badge
      bg={color}
      className='mx-1 p-2'
    >
      {text}
    </Badge>
  )
}
