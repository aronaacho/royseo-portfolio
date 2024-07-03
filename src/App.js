import logo from './logo.svg';
import './App.css';
import { MobileHeader } from './Components/MobileHeader';
import { MobileHome } from "./Pages/MobileHome.1";
import { MobileFooter } from './Components/MobileFooter';
import { Publications } from './Pages/publications';
import { Cv } from './Pages/cv';
import { Contact } from './Pages/contact';
import { About } from './Pages/about';
import { Route, Routes, BrowserRouter, HashRouter } from 'react-router-dom';

function App() {
  return (
    <div className='web-container'>
      <MobileHeader />
        <Routes>
          <Route path="/" element={<MobileHome />} />
          <Route path="/royseo-portfolio/home" element={<MobileHome />} />
          <Route path="/royseo-portfolio/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/royseo-portfolio/publications" element={<Publications/>} />
          <Route path="/cv" element={<Cv />} />
        </Routes>
        <MobileFooter/>
    </div>
  );
}

export default App;
