import './App.css';
import { MobileHeader } from './Components/MobileHeader';
import { MobileHome } from "./Pages/MobileHome";
import { MobileFooter } from './Components/MobileFooter';
import { Publications } from './Pages/publications';
import { WeCareReset } from './Pages/we_care_reset';
import { ActivityOne } from './Pages/activity1'; 
import { ActivityTwo } from './Pages/activity2';
import { ActivityThree } from './Pages/activity3';
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
            <Route path="/WE_CARE_RESET" element={<WeCareReset />} />
            <Route path="WE_CARE_RESET/Activity1" element={<ActivityOne />} />
            <Route path="WE_CARE_RESET/Activity2" element={<ActivityTwo />} /> 
            <Route path="WE_CARE_RESET/Activity3" element={<ActivityThree />} /> 
           
          </Routes>
          <MobileFooter/>
      </BrowserRouter>
    </div>
  );
}

export default App;
