import React from "react"
import {AiOutlineSearch} from 'react-icons/ai'
import './Hero.css'

const Hero = () =>{
    return (
        <div className='hero'>
            <div className='content'>
                <h1>The Magic Of Books</h1>
                <p className='search-text'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. At nesciunt suscipit beatae.</p>
                <form className='search'>
                    <div>
                        <input type='text' placeholder='What are you looking for?' />
                    </div>
                    <div className='radio'>
                        <button className="submit" type='submit'><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero