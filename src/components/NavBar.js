import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='NavbarContainer'>
      <img className='NavbarImage' src='https://previews.123rf.com/images/macrovector/macrovector1505/macrovector150500628/40442750-travel-background-with-world-landmarks-around-the-globe-vector-illustration.jpg' alt='TravelAppImage' />
      <NavLink to='/' className='NavbarLink'>Home</NavLink>
      <NavLink to='/destinations' className='NavbarLink'>Destinations</NavLink>
      <NavLink to='/about' className='NavbarLink'>About</NavLink>
    </div>
  )
}

export default NavBar;
