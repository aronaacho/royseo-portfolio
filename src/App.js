import './App.css';
import { MobileHeader } from './Components/MobileHeader';
import { MobileHome } from "./Pages/MobileHome";
import { MobileFooter } from './Components/MobileFooter';
import { Publications } from './Pages/publications';
import { Cv } from './Pages/cv';
import { Contact } from './Pages/contact';
import { About } from './Pages/about';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className='web-container'>
      <BrowserRouter>
        <MobileHeader />

          <Routes>
            <Route exact path="/" element={<MobileHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/publications" element={<Publications/>} />
            <Route path="/cv" element={<Cv />} />
          </Routes>
          <MobileFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
