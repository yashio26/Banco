import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
        <ul className='nav justify-content-center'>
            <li className='nav-item'>
                <NavLink to='/inicio-sesion' activeClassName='active' className='nav-link'>Beneficios</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/inicio-sesion' activeClassName='active' className='nav-link'>Préstamos</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/inicio-sesion' activeClassName='active' className='nav-link'>Tarjetas</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to='/inicio-sesion' activeClassName='active' className='nav-link'>Ayuda</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar;