
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import MenuInicioPage from './pages/IndexMenu';
import EditorTexto from './pages/EditorTexto';
import ProyectsMenu from './pages/ProyectsMenu';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<MenuInicioPage />} />
          <Route exact path='/Proyects-menu/' element={<ProyectsMenu />} />
          <Route path='/Proyect/*' element={<EditorTexto />} />
          <Route exact path='/Folders/' element={<a />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
