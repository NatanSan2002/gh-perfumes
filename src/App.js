import    { BrowserRouter as Router, Routes, Route, Link }   from 'react-router-dom'  

import Home from "./pages/home.js";
import Nav from"./componentes/externos/JS/nav.js"


function App() {
  return (
    <Router>
      
   <Nav/>
   
   <main>


<Link to="/" >  </Link>

<Routes>  
<Route exact path="/" element={<Home/>} /> 

</Routes>




</main>


   
</Router>
  );
}

export default App;
