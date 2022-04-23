import React from 'react';
import Card from '../../componentes/Card/Card';
import Carousel from '../../componentes/Carousel/Carousel';
import NavBar from '../../componentes/NavBar/NavBar';

const Inicio = () => {
  return (
    <div className='Inicio'>
        <h1>¡Bienvenido al Banco xD!</h1>
        <NavBar />
        <Carousel />
        <div>
            <Card />
            <Card />
            <Card />
        </div>
    </div>
  )
}

export default Inicio;