
import {Routes, Route} from "react-router-dom";
import Register from "./pages/Register";
import Info from "./pages/Info";
import Showcase from "./pages/Showcase";
import Movies from "./pages/Movies";

function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Register/>}/>
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/info" element = {<Info/>}/>
        <Route path = "/showcase" element = {<Showcase/>}/>
        <Route path = "/movies" element = {<Movies/>}/>
        <Route path = "*" element={ <h1> 404 Route not found 😞 </h1> } />
      </Routes>
    </>
  );
}

export default App
