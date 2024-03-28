import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbarapp from './components/layout/Navbarapp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch
import PageNotfound from './components/pages/PageNotfound';
import Edit from './components/pages/Edit';

function App() {
  return (
    <>
      <Router>
        <Navbarapp />
        <Routes> {/* Use Routes */}
          <Route path="/" element={<Home />} /> 
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/edit" element={<Edit />} /> 
          <Route path="*" element={<PageNotfound/>} /> 
          
        </Routes>
      </Router>
    </>
  );
}

export default App;
