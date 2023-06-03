import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyHeader from './Pages/Header/MyHeader';
import Home from './Pages/Home/Home';
import Skills from './Pages/Skills/Skills';
import Projects from './Pages/Projects/Projects';

function App() {
  return (
    <div className="App">
   <BrowserRouter>
   <MyHeader/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/skills' element={<Skills/>}></Route>
    <Route path='/projects' element={<Projects/>}></Route>
    <Route path='/about' element={<Projects/>}></Route>
    <Route path='/contact' element={<Projects/>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
