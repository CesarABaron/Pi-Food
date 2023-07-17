
import {Route,Routes} from "react-router-dom"
import LandingPage from "./Components/LandingPage/landingPage.component";
import About from "./Components/AboutPage/about.component";
import Home from "./Components/HomePage/home.component";
import { useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar/navBar.component";
import Detail from "./Components/DetailPage/detail.component";
import Form from "./Components/FormPage/form.component";


function App() {

  // const [searchString, setSearchStrung] = useState(""); 


  //   function handleChange(e){
  //       e.preventDefault();
  //       searchString(e.target.value)
  //   }


  //   function handleSubmit(e){
  //       e.preventDefault();
  //       dispatch(getRecipesById(searchString))

  //   }

  const location = useLocation();

  return (
<div >
{location.pathname !== "/" && <NavBar />}


<Routes>     



<Route exact path="/home" element={<Home />} />
<Route path="/home/:id" element={<Detail/>} />
<Route path="/create" element={<Form/>} />
<Route path="/"  element={<LandingPage/>} />
<Route path="/about" element={<About />} />

</Routes>

</div>

  );
}

export default App;
