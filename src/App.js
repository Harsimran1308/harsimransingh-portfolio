import './App.css';
import Header from "./Header";
import Profile from './Profile';
import About from './About';
import Resume from './Resume';
import Work from './Work'
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className='main-container' id='main-container'>
        <div className='header'>
          <Header></Header>
        </div>
        <div id='home'>
          <Profile></Profile>
        </div>
        <div id='about'>
          <About></About>
        </div>
        <div id='resume'>
          <Resume></Resume>
        </div>
        <div id='work'>
          <Work></Work>
        </div>
        <div id='footer'>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
