
import './App.css';
import './Component/Navbar'
import './Component/Footer'
import './Component/HomeContent'
import './Component/AboutMe'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'
import HomeContent from './Component/HomeContent'
import AboutMe from './Component/AboutMe'
function App() {
  return (
    <div className="wrap" >
      <Navbar></Navbar>
      <HomeContent></HomeContent>
      <AboutMe></AboutMe>
      <Footer></Footer>
    </div>
  );
}

export default App;
