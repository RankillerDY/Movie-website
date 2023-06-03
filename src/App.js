import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MainCompo from './MainCompo';
import Slider from './slider/Slider';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header/>
      
      <Slider/>
      <MainCompo/>
      <Footer/>
    </div>
  );
}

export default App;
