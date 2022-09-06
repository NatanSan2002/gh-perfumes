import    { BrowserRouter as Router, Routes, Route, Link }   from 'react-router-dom'  

import Home from "./pages/home.js";
import Nav from"./componentes/externos/JS/nav.js";
import Footer from './componentes/externos/JS/footer.js';


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

<Footer/>
   
</Router>
  );
}

export default App;
