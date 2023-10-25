import './App.css';
import Footer from './components/Footer';
import Forms from './components/Forms';
import LandingPage from './components/LandingPage';
import Lists from './components/Lists';
import Navbar from './components/Navbar';
import State from './components/State';

// Lists and keys
// state
// Events
// forms


function App() 
{
  let name = "Kelvin"


  return (
    <div className="bg-light">
       <Navbar />
       <LandingPage myname={name} />
       <Forms />
       <State/>
       <Lists />
       <Footer/>
    </div>
  );
}

export default App;
