import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainCompo from './MainCompo';
import Slider from './slider/Slider';
import Footer from './Footer';
import Detail from './Detail';
import { Route, Router, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Contact from './Contact';
import About from './About';
import Dashboard from './Dashboard';
import Add from './Add';
import Update from './Update';
import Login from './login/Login';
import Protected from './ProtectedComp';

function App() {
  const location = useLocation();
  const showSlider = location.pathname === '/';
  return (
    <div className="App">

      <Header />
      {showSlider && <Slider />}
      <Routes>
        <Route path="/" element={<MainCompo />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Add" element={<Protected><Add /></Protected>} />
        <Route path='/Dashboard' element={<Protected><Dashboard /></Protected>} />
        <Route path='/Update/:id' element={<Protected><Update /></Protected>} />
        <Route path='/Login' element={<Login />} />

      </Routes>
      {/* <Dashboard /> */}

      <Footer />
    </div>
  );
}

export default App;
