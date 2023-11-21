import { Routes, Route } from 'react-router-dom'
import TP1 from './composant/Tp1-react'
import { TodoWrapper } from './composant/TodoWrapper';
import Tp4 from './composant/Tp4-react';
import NavbarComponent from './composant/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contenu from './Components/Contenu/Contenu';
import ToggleLangs from './Components/ToggleLangs/ToggleLangs';
import ContextProvider from './context/langContext';
function App() {
  return (
    <ContextProvider>
    <div className="App" id='theme'>
     <h1> <NavbarComponent /> </h1>
      <Routes>
        <Route path="/" element={< TP1/>} />
        <Route path="/todo" element={<TodoWrapper />} />
        <Route path="/pagination" element={<Tp4/>} />
        <Route path="/lang" element={<>  <ToggleLangs/><Contenu /></>} />
        <Route path="*" element={<h1 className='h1'>404</h1>} />
      </Routes>
    </div>
    </ContextProvider >
  );
}

export default App;
