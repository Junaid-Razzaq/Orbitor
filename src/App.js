import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Mainbody/Main';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Service from './Pages/Service';

function App() {
  return (
  <Main>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='contact' element={<Contact/>} />
    <Route path='portfolio' element={<Portfolio/>} />
    <Route path='service' element={<Service/>} />
    </Routes>
  </Main>  
  
  );
}

export default App;
