// import logo from './logo.svg';
import './App.css'; 
import './background.css';
import './visulaizer/instructions'
import Navbar from './visulaizer/navbar';
import Visualizer from './visulaizer/visualizer';

function Home() {
  return (
    <div className="App">  
     <div id="stars" />
     <div id="stars2" />
      <div id="stars" />
      
      <Visualizer/> 
    </div>
  );
}

export default Home;
