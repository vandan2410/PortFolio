
import './App.css';
import './Component/Navbar'
import './Component/Footer'
import './Component/HomeContent'
import './Component/Bio'
import './Component/Project'
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'
import HomeContent from './Component/HomeContent'
import Bio from './Component/Bio'
import Skills from './Component/Skills';
import Project from'./Component/Project'
import Connect from './Component/Connect'
function App() {
  return (
    <div className="wrap" >
      <Navbar></Navbar>
      <HomeContent></HomeContent>
      <Bio></Bio>
      <Skills></Skills>
      <Project></Project>
      <Connect></Connect>
      <Footer></Footer>
    </div>
  );
}

export default App;
