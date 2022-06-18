import Mainpage from "./pages/Mainpage";
import {Routes,Route} from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Contact from "./pages/Contact";
import Mobilenavigation from "./components/Mobilenavigation";

function App() {
  return <main>
    <Navbar/>
    <Routes>    
       <Route path="/" element={<Mainpage />} />
       <Route path="/about" element={<About/>}></Route>
       <Route path="/work" element={<Work/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
       <Route path="/menu" element={<Mobilenavigation/>}></Route>
     </Routes>
     <Footer/>
  </main>
  
    
}

export default App;
