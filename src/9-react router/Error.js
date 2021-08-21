import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
    return (
        <div>
           <h2> Nothing found</h2>
           <Link to='/' className='btn'> Back to home</Link>
        </div>
    )
}

export default Error
