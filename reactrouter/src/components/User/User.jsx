import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='bg-gray-300 text-black-300 text-3xl'>
      User : {userid}
    </div>
  )
}

export default User
