import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';
import About from './Pages/About/About';
import Contacts from './Pages/Contacts/Contacts';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/skills' element={<Skills/>}></Route>
    <Route path='/projects' element={<Projects/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contacts/>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
