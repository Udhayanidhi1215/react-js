import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import img from '../../assets/images/boy.jpg'

const Sidebar = () => {
    return (
        <div className='test'>

            {/* <button onClick={'/'}>Home</button>
            <button onClick={'/about'}>About</button>
            <button onClick={'/login'}>Contact</button> */
    }
            <img src={img} alt='Boy' className='img'></img>
                    <ul className='side' > 
                        <li><Link to='/'  >Home</Link></li>
                        <li><Link to='/about' >About</Link></li>
                        <li><Link to='/login' >Contact</Link></li>
                        
                        
                    </ul>
        </div>
    )
}

export default Sidebar