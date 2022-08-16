import React from 'react'
import './topbar.css'

const Topbar = (props) => {
    return (
        <div className='topbar'>
        <h3>{props.data1}</h3>
        </div>
    )
}

export default Topbar