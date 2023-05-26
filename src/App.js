import React from 'react';
import { Home } from './Pages/home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import { Class11 } from './Pages/class11';
import { Class12 } from './Pages/class12';
import { Class11content } from './Pages/subjectContent/class11content';
import { Class12content } from './Pages/subjectContent/class12Content';
import { Ncertbook11 } from './Pages/subjectContent/class11data/ncertbook11';
import { MindMaps11 } from './Pages/subjectContent/class11data/mindmaps11';
import { Navbar } from './feature/navbar';
import { About_us } from './feature/about_us';
import { Sidebar } from './feature/sidebar';

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Sidebar/>
    <Routes>
    <Route path="/class11" element={<Class11/>}/> 
    <Route path="/class12" element={<Class12/>}/> 
    <Route path="/class11/class11Content" element={<Class11content/>}/> 
    <Route path="ncertchapter11pdf" element={<Ncertbook11/>}/> 
    <Route path="mindmaps11pdf" element={<MindMaps11/>}/> 
    <Route path="/class12/class12Content" element={<Class12content/>}/> 
    <Route path="/" element={<Home/>}/> 
    {/* <Route path="/about" element={<About_us/>}/>  */}
    </Routes>
    </BrowserRouter>
  );
};

export default App;
