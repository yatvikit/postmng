import React from 'react'
import { useParams } from 'react-router-dom'

const Catpost = () => {
    let {cat}=useParams()
  return (
    <div>Catpost:{cat}</div>
  )
}

export default Catpost