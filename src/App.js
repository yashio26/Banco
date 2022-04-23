import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InicioSesion from './views/InicioSesion/InicioSesion';
import Inicio from './views/Inicio/Inicio';
import Header from './componentes/Header/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />}/>
          <Route path='/inicio-sesion' element={<InicioSesion />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
