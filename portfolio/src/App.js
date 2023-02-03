
import './App.css';
import './Component/Navbar'
import './Component/Footer'
import './Component/HomeContent'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'
import HomeContent from './Component/HomeContent'
function App() {
  return (
    <div className="wrap" >
      <Navbar></Navbar>
      <HomeContent></HomeContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
