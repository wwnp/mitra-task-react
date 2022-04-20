import React from 'react'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux';


export const MorePage = (props) => {
  const { id } = useParams()
  const data = useSelector(state => state?.mainpage.data)
  const out = data.find(i => i.id === id)
  console.log(out)
  return (
    <div>MorePage</div>
  )
}
