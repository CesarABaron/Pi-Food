import './App.css';
import LandingPage from './Components/LandingPage/landigPage';
import About from './Components/AboutPage/about';
import { Route,Switch } from "react-router-dom"

function App() {
  return (
    <div className="App">

   

<Switch>
    <Route exact path="/" element={<LandingPage/>}/>
    <Route path="/about" element={<About />} />
</Switch>



    </div>
  );
}

export default App;
