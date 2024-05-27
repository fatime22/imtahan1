import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header className='header1'>
       <nav className='navbar'>
         <h1>EATWEEL</h1>
         <div className='list'>
          <Link to='/'>Home</Link>
          <Link>About</Link>
          <Link>Offer</Link>
          <Link>Menu</Link>
          <Link>News</Link>
          <Link>Gallery</Link>
          <Link>Contact</Link>
         </div>
      </nav>
      <section className='section1'>
        <h1 className='element'>Welcome To Eatweel</h1>
        <p className='elementp'>Come and eat will with our delicious & healthy foods.</p>
        <button className='btn'>Reservation</button>
      </section>
    </header>
  )
}

export default Header