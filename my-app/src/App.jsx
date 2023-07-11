
import {Route,Routes} from "react-router-dom"
import LandingPage from "./Components/LandingPage/landingPage.component";
import About from "./Components/AboutPage/about.component";
import Home from "./Components/HomePage/home.component";
import { useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/navBar.component";


function App() {
  return (
<div >


<Routes>     

<Route path="/"  element={<LandingPage/>} />
<Route path="/about" element={<About />} />
<Route path="/home" element={<Home />} />

</Routes>

</div>

  );
}

export default App;
