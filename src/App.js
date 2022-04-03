
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/home';

import './App.css';
import About from './components/pages/about';
import Services from './components/pages/services';
import Contact from './components/pages/contact';
import Footer from './components/footer';

function App() {
    return ( 
      <>
      
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={ <About/> }/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/contact' element={<Contact/>}/>

        </Routes>
        <Footer/>
      </Router>
      
     
        
       
      </>
    );
}

export default App;