import './App.css';
import NavBar from  "./components/NavBar"
import Home from './pages/Home';
import SocialBar from './components/SocialBar'
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>
      <Contact/>
      <SocialBar/>
    </div>
  );
}

export default App;
