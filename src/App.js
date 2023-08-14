import './App.css';
import NavBar from  "./components/NavBar"
import Home from './pages/Home';
import SocialBar from './components/SocialBar'
import About from './pages/About'
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Projects from './pages/Projects'
function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
      <SocialBar/>
    </div>
  );
}

export default App;
