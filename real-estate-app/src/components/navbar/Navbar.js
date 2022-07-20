import React, {useState} from "react"
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {GiSpellBook} from 'react-icons/gi'
import {RiErrorWarningLine} from 'react-icons/ri'

 import './Navbar.css'

const Navbar = () => {
    
    
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    
    
    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><GiSpellBook />Star</span>Books</h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>categories</a>
                        <ul>
                        <li><a href='#'>Romance</a></li>
                        <li><a href='#'>Historical</a></li>
                        <li><a href='#'>Horror</a></li>
                        <li><a href='#'>Thriller</a></li>
                        <li><a href='#'>Literary Fiction</a></li>
                        </ul>
                    </li>
                    <li><a href='#'>Recommended</a></li>
                    <li><a href='#'>Best Sellers</a></li>
                    <li><a href='#'>Book Tips</a></li>
                    <li><a href='#'>Help </a><span><RiErrorWarningLine/></span></li>
                </ul>
                <button className="btn">Sign In</button>
                <div className='hamburger' onClick={handleClick} >
                    {click ? (<FaRegTimesCircle className='icon'/>) :
                    <HiOutlineMenuAlt4 className='icon' />}
                </div>
             
            </div>
        </div>
    )
}

export default Navbar