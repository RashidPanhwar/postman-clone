import React from 'react'
import logo from '../assets/postman-logo.png';
import Image from 'next/image';

const Header = () => {
  return (
    <div>
        <Image className='p-5' src={logo} alt='logo' width={150} height={150} />
    </div>
  )
}

export default Header