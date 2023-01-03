import './App.css';
import NavBar from  "./components/NavBar"
import Home from './pages/Home';
import SocialBar from './components/SocialBar'
import About from './pages/About';
function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>

      <SocialBar/>
    </div>
  );
}

export default App;
