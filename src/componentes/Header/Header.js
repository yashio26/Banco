import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <Link to={'/'} className='navbar-brand'>*Imagen o nombre de banco*</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li>
                        <Link to='/inicio-sesion' className='nav-link active'>Convertite en cliente</Link>
                    </li>
                    <li>
                        <Link to='/inicio-sesion' className='nav-link active'>Home banking</Link>
                    </li>
                </ul>
            </div>
        </div>
  </nav>
  )
}
/*     <nav>
        <ul>
            <li>
                <Link to='/' className='Link'>Inicio</Link>
            </li>
            <li>
                <Link to='/inicio-sesion' className='Link'>Convertite en cliente</Link>
            </li>
            <li>
                <Link to='/inicio-sesion' className='Link'>Home banking</Link>
            </li>
        </ul>
    </nav> */

export default Header